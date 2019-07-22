import { Component, OnInit } from '@angular/core';
import { DocumentationService, Documentation } from './documentation.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  private docs: Documentation[] = [];

  constructor() { }

  ngOnInit() {
    this.docs = DocumentationService.getDocumentation("en");
  }

}
