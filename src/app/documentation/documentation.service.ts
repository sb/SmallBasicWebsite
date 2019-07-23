import { Injectable } from '@angular/core';

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
  description: string;
  operations: ChildDoc[];
  events: ChildDoc[];
  properties: ChildDoc[];
}

export class ChildDoc {
  name: string;
  type: DocType;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor() { }

  // Gets the supported languages for documentation
  public static getLanguages(): string[] {
    return ["english", "other language", "idk"];
  }

  // Gets the small basic documentation for a given language
  public static getDocumentation(language: string): ParentDoc[] {
    return [{
      name: "Turtle",
      type: DocType.Object,
      description: language + " The Turtle provides Logo-like functionality to draw shapes by manipulating the properties of a pen and drawing primitives.",
      operations: [{
        name: "Move",
        type: DocType.Operation,
        description: "Moves the turtle to a specified distance. If the pen is down, it will draw a line as it moves."
      }],
      events: [],
      properties: []
    }, {
        name: "GraphicsWindow",
        type: DocType.Object,
        description: "The GraphicsWindow provides graphics related input and output functionality. For example, using this class, it is possible to draw and fill circles and rectangles.",
        properties: [{
          name: "Top",
          type: DocType.Property,
          description: "Gets or sets the Top Position of the graphics window."
        }],
        operations: [{
            name: "Clear",
            type: DocType.Operation,
            description: "Clears the window."
        }],
        events: [{
            name: "KeyDown",
            type: DocType.Event,
            description: "Raises an event when a key is pressed down on the keyboard."
          }]
      }];
  }
}
