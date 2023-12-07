import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglecartComponent } from './googlecart.component';

describe('GooglecartComponent', () => {
  let component: GooglecartComponent;
  let fixture: ComponentFixture<GooglecartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglecartComponent]
    });
    fixture = TestBed.createComponent(GooglecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
