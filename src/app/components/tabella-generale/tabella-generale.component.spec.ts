import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaGeneraleComponent } from './tabella-generale.component';

describe('TabellaGeneraleComponent', () => {
  let component: TabellaGeneraleComponent;
  let fixture: ComponentFixture<TabellaGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaGeneraleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabellaGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
