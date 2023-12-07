import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountComponent } from './acount.component';

describe('AcountComponent', () => {
  let component: AcountComponent;
  let fixture: ComponentFixture<AcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcountComponent]
    });
    fixture = TestBed.createComponent(AcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
