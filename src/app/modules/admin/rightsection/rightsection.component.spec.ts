import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsectionComponent } from './rightsection.component';

describe('RightsectionComponent', () => {
  let component: RightsectionComponent;
  let fixture: ComponentFixture<RightsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
