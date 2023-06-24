import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickQuoteComponent } from './pick-quote.component';

describe('PickQuoteComponent', () => {
  let component: PickQuoteComponent;
  let fixture: ComponentFixture<PickQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickQuoteComponent]
    });
    fixture = TestBed.createComponent(PickQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
