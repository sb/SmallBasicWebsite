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
  events: Event[];
  properties: Property[];
}

export class Operation {
  name: string;
  summary: string;
  operationSignature: string;
  returnType: string;
  parameters: OperationParams[];  
}

export class OperationParams {
  name: string;
  summary: string;
}

export class Event {
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

  constructor(private http: HttpClient) { }

  // Gets the supported languages for documentation
  public getLanguages(): string[] {
    return ["english", "other language", "idk"];
  }

  // Gets the small basic documentation for a given language
  public getDocumentation(language: string): ParentDoc[] {
    this.http.get('/assets/documentation/xml/SmallBasicLibrary.xml', { responseType: 'text' })
      .subscribe((data) => {
        if (parser.validate(data) === true) {
          var jsonObj = parser.parse(data, this.parserOptions);
          var parentDocs: ParentDoc[] = [];
          jsonObj.doc.members.member.forEach((member) => {
            var usage = member["@_name"];
            usage = usage.replace(":Microsoft.SmallBasic.Library.", "");
            usage = usage.replace(/Microsoft.SmallBasic.Library.Primitive/g, "param");
            var type = usage[0];
            usage = usage.substring(1);
            switch (type) {
              case "T":
                parentDocs.push({
                  name: usage,
                  type: type,
                  summary: member.summary,
                  events: [],
                  operations: [],
                  properties: []
                });
                break;
              case "M":
                console.log(member);
                //type = DocType.Operation;
                break;
              case "P":
                //type = DocType.Property;
                break;
              case "E":
                //type = DocType.Event;
                break;
              default:
                //type = DocType.Keyword;
                console.log(usage[0]);
                console.log(member.summary);
                console.log(member);
            }
          });
        } else {
          console.log("Invalid library contents");
        }
        return parentDocs;
      });
    
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
      }];
    
  }
}
