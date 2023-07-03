import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesudemyComponent } from './pagesudemy.component';

describe('PagesudemyComponent', () => {
  let component: PagesudemyComponent;
  let fixture: ComponentFixture<PagesudemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesudemyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesudemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
