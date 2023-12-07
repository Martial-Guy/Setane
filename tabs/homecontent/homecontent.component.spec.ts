import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontentComponent } from './homecontent.component';

describe('HomecontentComponent', () => {
  let component: HomecontentComponent;
  let fixture: ComponentFixture<HomecontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomecontentComponent]
    });
    fixture = TestBed.createComponent(HomecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
