import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcomponentComponent } from './selectcomponent.component';

describe('SelectcomponentComponent', () => {
  let component: SelectcomponentComponent;
  let fixture: ComponentFixture<SelectcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
