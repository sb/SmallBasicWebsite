import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { HeaderComponent } from './header/header.component';

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
import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    ResourcesComponent,
    HeaderComponent,
    TutorialComponent,
    Chapter1Component,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component,
    Chapter9Component,
    Chapter10Component,
    Chapter11Component,
    AppendixAComponent,
    AppendixBComponent,
    DocumentationComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      MatExpansionModule,
      MatButtonModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
