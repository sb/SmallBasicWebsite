import { async, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HomeComponent } from '../home/home.component';

describe('HeaderComponent', () => {

  beforeEach(async(() => {
    const routes: Routes = [
      { path: "", component: HomeComponent }
    ];

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      declarations: [
        HeaderComponent,
        HomeComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));
  
  it('should create home link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let index = app.links.map(e => e.name).indexOf('Home');
    expect(app.links[index].name).toEqual('Home');
    expect(app.links[index].route).toEqual('/');
  });

  it('should create tutorials link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let index = app.links.map(e => e.name).indexOf('Tutorials');
    expect(app.links[index].name).toEqual('Tutorials');
    expect(app.links[index].route).toEqual('/tutorials');
  });

  it('should create resources link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let index = app.links.map(e => e.name).indexOf('Resources');
    expect(app.links[index].name).toEqual('Resources');
    expect(app.links[index].route).toEqual('/resources');
  });

  it('should create faq link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let index = app.links.map(e => e.name).indexOf('FAQ');
    expect(app.links[index].name).toEqual('FAQ');
    expect(app.links[index].route).toEqual('/faq');
  });

  it('should create contact link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let index = app.links.map(e => e.name).indexOf('Contact');
    expect(app.links[index].name).toEqual('Contact');
    expect(app.links[index].route).toEqual('/contact');
  });
});
