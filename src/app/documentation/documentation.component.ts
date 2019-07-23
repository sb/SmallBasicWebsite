import { Component, OnInit } from '@angular/core';
import { DocumentationService, Documentation, DocType } from './documentation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  public docs: Documentation[] = [];
  public currentDocIndex: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Get all the documentation for the selected language
    this.docs = DocumentationService.getDocumentation("en");

    // Subscribe to route changes to get the current item being viewed
    this.route.params.subscribe(() => {
      this.currentDocIndex = this.docs.findIndex((doc) => {
        return doc.name == this.route.snapshot.params['id'];
      });
    });
  }

  public enumToClass(enumVal: DocType): string {
    return DocType[enumVal].toLowerCase();
  }
}
