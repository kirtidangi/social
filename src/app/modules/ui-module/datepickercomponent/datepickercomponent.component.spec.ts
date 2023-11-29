import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickercomponentComponent } from './datepickercomponent.component';

describe('DatepickercomponentComponent', () => {
  let component: DatepickercomponentComponent;
  let fixture: ComponentFixture<DatepickercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
