import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleEntryHomeComponent } from './double-entry-home.component';

describe('DoubleEntryHomeComponent', () => {
  let component: DoubleEntryHomeComponent;
  let fixture: ComponentFixture<DoubleEntryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleEntryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleEntryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
