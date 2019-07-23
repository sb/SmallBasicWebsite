import { Injectable } from '@angular/core';

export enum DocType {
  Object,
  Property,
  Operation,
  Event,
  Keyword
}

export class Documentation {
  name: string;
  type: DocType;
  description: string;
  children: Documentation[]
}

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor() { }

  // Gets the small basic documentation for a given language
  public static getDocumentation(language: string): Documentation[] {
    return [{
      name: "Turtle",
      type: DocType.Object,
      description: "Is a turtle",
      children: [{
        name: "Move",
        type: DocType.Operation,
        description: "Moves turtle",
        children: []
      }]
    }];
  }
}
