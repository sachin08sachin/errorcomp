import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupbtnComponent } from './popupbtn.component';

describe('PopupbtnComponent', () => {
  let component: PopupbtnComponent;
  let fixture: ComponentFixture<PopupbtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupbtnComponent]
    });
    fixture = TestBed.createComponent(PopupbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
