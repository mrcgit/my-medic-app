import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureRegisterComponent } from './temperature-register.component';

describe('TemperatureRegisterComponent', () => {
  let component: TemperatureRegisterComponent;
  let fixture: ComponentFixture<TemperatureRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
