import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetadetailsComponent } from './tarjetadetails.component';

describe('TarjetadetailsComponent', () => {
  let component: TarjetadetailsComponent;
  let fixture: ComponentFixture<TarjetadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
