import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportReceiptComponent } from './export-receipt.component';

describe('ExportReceiptComponent', () => {
  let component: ExportReceiptComponent;
  let fixture: ComponentFixture<ExportReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
