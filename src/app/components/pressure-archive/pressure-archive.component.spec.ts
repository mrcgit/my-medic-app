import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureArchiveComponent } from './pressure-archive.component';

describe('PressureArchiveComponent', () => {
  let component: PressureArchiveComponent;
  let fixture: ComponentFixture<PressureArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressureArchiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressureArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
