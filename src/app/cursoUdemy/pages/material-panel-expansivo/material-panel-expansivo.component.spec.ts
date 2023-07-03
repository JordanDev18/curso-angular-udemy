import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPanelExpansivoComponent } from './material-panel-expansivo.component';

describe('MaterialPanelExpansivoComponent', () => {
  let component: MaterialPanelExpansivoComponent;
  let fixture: ComponentFixture<MaterialPanelExpansivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPanelExpansivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialPanelExpansivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
