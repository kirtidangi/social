import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardinfoComponent } from './awardinfo.component';

describe('AwardinfoComponent', () => {
  let component: AwardinfoComponent;
  let fixture: ComponentFixture<AwardinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
