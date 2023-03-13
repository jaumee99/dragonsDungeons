import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstresComponent } from './monstres.component';

describe('MonstresComponent', () => {
  let component: MonstresComponent;
  let fixture: ComponentFixture<MonstresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
