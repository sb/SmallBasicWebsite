import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as parser from 'fast-xml-parser';

export enum DocType {
  Object,
  Property,
  Operation,
  Event,
  Keyword
}

export class ParentDoc {
  name: string;
  type: DocType;
  summary: string;
  operations: Operation[];
  events: SimplePair[];
  properties: Property[];
  keywords: SimplePair[];
}

export class Operation {
  name: string;
  summary: string;
  operationSignature: string;
  returnType: string;
  parameters: SimplePair[];  
}

export class SimplePair {
  name: string;
  summary: string;
}

export class Property {
  name: string;
  summary: string;
  isReadOnly: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  private parserOptions = { 
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    ignoreAttributes: false
  };

  private blockedDocs: string[] = ["Internal", "Platform", "Primitive", "SmallBasicCallback"];

  constructor(private http: HttpClient) { }

  // Gets the supported languages for documentation
  public getLanguages(): SimplePair[] {
    return [
      { name: "en", summary: "English" },
      { name: "ar", summary: "العربية" },
      { name: "bg", summary: "български" },
      { name: "cs", summary: "čeština" },
      { name: "de", summary: "Deutsch" },
      { name: "es", summary: "español" },
      { name: "fr", summary: "français" },
      { name: "he", summary: "עברית" },
      { name: "hr", summary: "hrvatski" },
      { name: "is", summary: "íslenska" },
      { name: "it", summary: "italiano" },
      { name: "ja", summary: "日本語" },
      { name: "ko", summary: "한국어" },
      { name: "nl", summary: "Nederlands" },
      { name: "pl", summary: "polski" },
      { name: "pt", summary: "português" },
      //{ name: "pt-br", summary: "???" }, // TODO: is this português (Brazil) ?
      { name: "pt-pt", summary: "português (Portugal)" },
      { name: "tr", summary: "Türkçe" },
      { name: "zh-Hans", summary: "中文(简体)" },
      { name: "zh-Hant", summary: "中文(繁體)" }
    ];
  }

  // Gets the small basic documentation for a given language
  // IMPORTANT: Assumes the XML has definitions for parent objects followed directly by their children
  public getDocumentation(language: string): Promise<ParentDoc[]> {
    var filePath = "/assets/documentation/xml/SmallBasicLibrary.";
    let foundLanguage = this.getLanguages().filter((lang) => {
      return lang.summary == language;
    });
    if (foundLanguage.length == 0) {
      return Promise.reject(language + " is not a supported language.");
    } else {
      var languageCode = foundLanguage[0].name;
      filePath += languageCode == "en" ? "xml" : languageCode + ".xml";
    }

    return new Promise<ParentDoc[]>((resolve, reject) => {
      this.http.get(filePath, { responseType: 'text' })
        .subscribe((data) => {
          if (parser.validate(data) === true) {
            var jsonObj = parser.parse(data, this.parserOptions);
            var parentDocs: ParentDoc[] = [];
            jsonObj.doc.members.member.forEach((member) => {
              var usage: string = member["@_name"];
              usage = usage.replace(":Microsoft.SmallBasic.Library.", "");
              var type: string = usage[0];
              usage = usage.substring(1);

              // Parse out the parent and operation names
              var firstPeriod = usage.indexOf(".");
              var firstParen = usage.indexOf("(");
              firstParen = firstParen > 0 ? firstParen : usage.length;
              var parentName: string = usage.substring(0, firstPeriod);
              var operationName: string = usage.substring(firstPeriod + 1, firstParen);

              // Check if we should display this
              if (this.blockedDocs.filter((blockedDocName) => {
                return usage.indexOf(blockedDocName) == 0;
              }).length == 0) {
                switch (type) {
                  case "T":
                    // Add a new parent object
                    parentDocs.push({
                      name: usage,
                      type: usage == "Keywords" ? DocType.Keyword : DocType.Object,
                      summary: member.summary,
                      events: [],
                      operations: [],
                      properties: [],
                      keywords: []
                    });
                    break;
                  case "M":
                    // SPECIAL CASE: KEYWORDS
                    if (parentName == "Keywords") {
                      parentDocs[parentDocs.length - 1].keywords.push({
                        name: operationName,
                        summary: member.summary
                      });
                      break;
                    }

                    // Map the parameters
                    var params = member.param;
                    var formattedParameters = [];
                    if (Array.isArray(params)) {
                      formattedParameters = params.map((param) => {
                        return {
                          name: param["@_name"],
                          summary: param["#text"]
                        }
                      });
                    } else if (params) {
                      formattedParameters = [{
                        name: params["@_name"],
                        summary: params["#text"]
                      }];
                    }

                    // Replace the usage signature with param names
                    formattedParameters.forEach((param) => {
                      usage = usage.replace("Microsoft.SmallBasic.Library.Primitive", param.name);
                    });

                    // Add an operation to a parent object
                    parentDocs[parentDocs.length - 1].operations.push({
                      name: operationName,
                      summary: member.summary,
                      operationSignature: usage,
                      returnType: member.returns,
                      parameters: formattedParameters
                    });
                    break;
                  case "P":
                    // Add an property to a parent object
                    // TODO: XML doesn't seem to contain value for read only
                    parentDocs[parentDocs.length - 1].properties.push({
                      name: operationName,
                      summary: member.summary,
                      isReadOnly: false
                    });
                    break;
                  case "E":
                    // Add an event to a parent 
                    parentDocs[parentDocs.length - 1].events.push({
                      name: operationName,
                      summary: member.summary
                    });
                    break;
                  default:
                    // Ignore other types
                }
              }
            });
          } else {
            reject("Invalid library contents");
          }
          resolve(parentDocs.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
          }));
        });
    });

      /*
    return [{
      name: "Turtle",
      type: DocType.Object,
      summary: language + " The Turtle provides Logo-like functionality to draw shapes by manipulating the properties of a pen and drawing primitives.",
      operations: [{
        name: "Move",
        operationSignature: "Turtle.Move(distance)",
        returnType: "Nothing",
        parameters: [{
          name: "distance",
          summary: "the distance to move the turtle"
        }],
        summary: "Moves the turtle to a specified distance. If the pen is down, it will draw a line as it moves."
      }],
      events: [],
      properties: []
    }, {
        name: "GraphicsWindow",
        type: DocType.Object,
        summary: "The GraphicsWindow provides graphics related input and output functionality. For example, using this class, it is possible to draw and fill circles and rectangles.",
        properties: [{
          name: "Top",
          summary: "Gets or sets the Top Position of the graphics window.",
          isReadOnly: false
        },{
            name: "LastKey",
            summary: "Gets the last key that was pressed or released.",
            isReadOnly: true
        }],
        operations: [{
          name: "Clear",
          summary: "Clears the window.",
          parameters: [],
          returnType: "Nothing",
          operationSignature: "GraphicsWindow.Clear()"
        }, {
            name: "GetColorFromRGB",
            summary: "Constructs a color given the Red, Green and Blue values.",
            parameters: [{
              name: "red",
              summary: "The red component of the Color (0-255)."
            }, {
              name: "green",
              summary: "The green component of the Color (0-255)."
            }, {
              name: "blue",
              summary: "The blue component of the Color (0-255)."
            }],
            returnType: "Returns a color that can be used to set the brush or pen color.",
            operationSignature: "GraphicsWindow.GetColorFromRGB(red, green, blue)"
          }],
        events: [{
          name: "KeyDown",
          summary: "Raises an event when a key is pressed down on the keyboard."
        }]
      }];*/
    
  }
}
