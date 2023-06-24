import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickImageComponent } from './pick-image.component';

describe('PickImageComponent', () => {
  let component: PickImageComponent;
  let fixture: ComponentFixture<PickImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickImageComponent]
    });
    fixture = TestBed.createComponent(PickImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
