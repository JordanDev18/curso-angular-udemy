import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateroriasComponent } from './caterorias.component';

describe('CateroriasComponent', () => {
  let component: CateroriasComponent;
  let fixture: ComponentFixture<CateroriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateroriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateroriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
