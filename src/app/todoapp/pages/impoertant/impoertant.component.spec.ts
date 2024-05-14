import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpoertantComponent } from './impoertant.component';

describe('ImpoertantComponent', () => {
  let component: ImpoertantComponent;
  let fixture: ComponentFixture<ImpoertantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpoertantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpoertantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
