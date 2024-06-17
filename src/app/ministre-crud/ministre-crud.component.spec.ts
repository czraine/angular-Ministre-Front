import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistreCrudComponent } from './ministre-crud.component';

describe('MinistreCrudComponent', () => {
  let component: MinistreCrudComponent;
  let fixture: ComponentFixture<MinistreCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistreCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
