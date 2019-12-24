import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularStructureThreeby3Component } from './tabular-structure-threeby3.component';

describe('TabularStructureThreeby3Component', () => {
  let component: TabularStructureThreeby3Component;
  let fixture: ComponentFixture<TabularStructureThreeby3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularStructureThreeby3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularStructureThreeby3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
