import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyScreenComponent } from './empty-screen.component';

describe('EmptyScreenComponent', () => {
  let component: EmptyScreenComponent;
  let fixture: ComponentFixture<EmptyScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyScreenComponent]
    });
    fixture = TestBed.createComponent(EmptyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
