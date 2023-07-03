import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTabsComponent } from './material-tabs.component';

describe('MaterialTabsComponent', () => {
  let component: MaterialTabsComponent;
  let fixture: ComponentFixture<MaterialTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
