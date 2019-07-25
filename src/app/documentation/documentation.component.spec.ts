import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from '../home/home.component';
import { DocumentationComponent } from './documentation.component';
import { SbcodePipe } from '../sbcode.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DocumentationComponent', () => {
  const routes: Routes = [
    { path: "", component: HomeComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientTestingModule,
        MatCardModule
      ],
      declarations: [
        HomeComponent,
        DocumentationComponent,
        SbcodePipe
      ]
    })
    .compileComponents();
  }));


  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
