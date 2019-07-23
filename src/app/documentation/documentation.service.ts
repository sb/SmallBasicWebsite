import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Documentation {
  name: string;
  type: string;
  description: string;
  children: Documentation[]
}

export class DocumentationService {

  constructor() { }

  // Gets the small basic documentation for a given language
  public static getDocumentation(language: string): Documentation[] {
    return [{
      name: "Turtle",
      type: "Object",
      description: "Is a turtle",
      children: [{
        name: "Move",
        type: "Operation",
        description: "Moves turtle",
        children: []
      }]
    }];
  }
}
