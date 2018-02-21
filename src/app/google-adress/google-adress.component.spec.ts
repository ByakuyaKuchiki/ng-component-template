import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAdressComponent } from './google-adress.component';

describe('GoogleAdressComponent', () => {
  let component: GoogleAdressComponent;
  let fixture: ComponentFixture<GoogleAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
