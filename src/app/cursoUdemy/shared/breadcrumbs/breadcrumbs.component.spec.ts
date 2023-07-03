import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breadcrumb1sComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: Breadcrumb1sComponent;
  let fixture: ComponentFixture<Breadcrumb1sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Breadcrumb1sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Breadcrumb1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
