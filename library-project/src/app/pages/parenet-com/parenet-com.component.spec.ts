import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenetComComponent } from './parenet-com.component';

describe('ParenetComComponent', () => {
  let component: ParenetComComponent;
  let fixture: ComponentFixture<ParenetComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParenetComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParenetComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
