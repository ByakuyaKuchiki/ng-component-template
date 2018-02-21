import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataBuilderComponent } from './form-data-builder.component';

describe('FormDataBuilderComponent', () => {
  let component: FormDataBuilderComponent;
  let fixture: ComponentFixture<FormDataBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
