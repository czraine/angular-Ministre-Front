import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingchartsComponent } from './testingcharts.component';

describe('TestingchartsComponent', () => {
  let component: TestingchartsComponent;
  let fixture: ComponentFixture<TestingchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
