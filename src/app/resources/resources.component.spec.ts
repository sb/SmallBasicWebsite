import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResourcesComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
