import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateLeaveStatusComponent } from './upate-leave-status.component';

describe('UpateLeaveStatusComponent', () => {
  let component: UpateLeaveStatusComponent;
  let fixture: ComponentFixture<UpateLeaveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpateLeaveStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpateLeaveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
