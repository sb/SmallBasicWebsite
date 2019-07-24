import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ResourcesComponent } from './resources/resources.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { TutorialComponent } from './tutorial/tutorial.component';
import { Chapter1Component } from './tutorial/chapters/chapter1/chapter1.component';
import { Chapter2Component } from './tutorial/chapters/chapter2/chapter2.component';
import { Chapter3Component } from './tutorial/chapters/chapter3/chapter3.component';
import { Chapter4Component } from './tutorial/chapters/chapter4/chapter4.component';
import { Chapter5Component } from './tutorial/chapters/chapter5/chapter5.component';
import { Chapter6Component } from './tutorial/chapters/chapter6/chapter6.component';
import { Chapter7Component } from './tutorial/chapters/chapter7/chapter7.component';
import { Chapter8Component } from './tutorial/chapters/chapter8/chapter8.component';
import { Chapter9Component } from './tutorial/chapters/chapter9/chapter9.component';
import { Chapter10Component } from './tutorial/chapters/chapter10/chapter10.component';
import { Chapter11Component } from './tutorial/chapters/chapter11/chapter11.component';
import { AppendixAComponent } from './tutorial/chapters/appendixA/appendixA.component';
import { AppendixBComponent } from './tutorial/chapters/appendixB/appendixB.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "faq", component: FaqComponent },
    { path: "resources", component: ResourcesComponent },
    { path: "docs", redirectTo: "docs/Turtle" },
    { path: "docs/:id", component: DocumentationComponent },
    {
      path: "tutorials", component: TutorialComponent, children: [
        { path: 'chapter1', component: Chapter1Component },
        { path: 'chapter1', component: Chapter1Component },
        { path: 'chapter2', component: Chapter2Component },
        { path: 'chapter3', component: Chapter3Component },
        { path: 'chapter4', component: Chapter4Component },
        { path: 'chapter5', component: Chapter5Component },
        { path: 'chapter6', component: Chapter6Component },
        { path: 'chapter7', component: Chapter7Component },
        { path: 'chapter8', component: Chapter8Component },
        { path: 'chapter9', component: Chapter9Component },
        { path: 'chapter10', component: Chapter10Component },
        { path: 'chapter11', component: Chapter11Component },
        { path: 'appendixA', component: AppendixAComponent },
        { path: 'appendixB', component: AppendixBComponent },
      ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
