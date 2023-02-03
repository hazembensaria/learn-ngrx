import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputComponent } from './counter-output.component';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<CounterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
