import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutSettingsComponent } from './accout-settings.component';

describe('AccoutSettingsComponent', () => {
  let component: AccoutSettingsComponent;
  let fixture: ComponentFixture<AccoutSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
