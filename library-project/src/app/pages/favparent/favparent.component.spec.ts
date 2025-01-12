import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavparentComponent } from './favparent.component';

describe('FavparentComponent', () => {
  let component: FavparentComponent;
  let fixture: ComponentFixture<FavparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
