import { Component, OnInit } from '@angular/core';
import { DocumentationService, ParentDoc, DocType, SimplePair } from './documentation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  public docs: ParentDoc[] = [];
  public languages: SimplePair[] = [];
  public currentDocIndex: number;
  private fragment: string;
  public selectedLanguage: string;
  public searchText: string;

  constructor(private route: ActivatedRoute,
    public docService: DocumentationService) {
  }

  ngOnInit() {
    // Get the language options and all the documentation for the default language
    this.languages = this.docService.getLanguages();
    this.selectedLanguage = this.languages[0].summary;
    this.languageChanged();

    // Subscribe to route changes to get the current item being viewed
    this.route.params.subscribe(() => {
      this.currentDocIndex = this.docs.findIndex((doc) => {
        return doc.name == this.route.snapshot.params['id'];
      });
    });
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelector('#' + this.fragment).scrollIntoView();
    }, 100);
  }

  // Language selection has changed, get new documentation
  languageChanged() {
    this.docService.getDocumentation(this.selectedLanguage).then((docs) => {
      this.docs = docs;
      this.currentDocIndex = this.docs.findIndex((doc) => {
        return doc.name == this.route.snapshot.params['id'];
      });
    });
  }

  public enumToClass(enumVal: DocType): string {
    return DocType[enumVal].toLowerCase();
  }
}
