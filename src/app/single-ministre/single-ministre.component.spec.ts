import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMinistreComponent } from './single-ministre.component';

describe('SingleMinistreComponent', () => {
  let component: SingleMinistreComponent;
  let fixture: ComponentFixture<SingleMinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMinistreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
