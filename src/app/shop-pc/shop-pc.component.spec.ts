import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPCComponent } from './shop-pc.component';

describe('ShopPCComponent', () => {
  let component: ShopPCComponent;
  let fixture: ComponentFixture<ShopPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
