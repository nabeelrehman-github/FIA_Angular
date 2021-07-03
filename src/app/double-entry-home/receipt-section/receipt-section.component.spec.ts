import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptSectionComponent } from './receipt-section.component';

describe('ReceiptSectionComponent', () => {
  let component: ReceiptSectionComponent;
  let fixture: ComponentFixture<ReceiptSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
