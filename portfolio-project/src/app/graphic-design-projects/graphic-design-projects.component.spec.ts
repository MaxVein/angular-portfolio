import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignProjectsComponent } from './graphic-design-projects.component';

describe('GraphicDesignProjectsComponent', () => {
  let component: GraphicDesignProjectsComponent;
  let fixture: ComponentFixture<GraphicDesignProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
