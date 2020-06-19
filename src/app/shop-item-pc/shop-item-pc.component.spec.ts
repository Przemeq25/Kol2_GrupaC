import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemPCComponent } from './shop-item-pc.component';

describe('ShopItemPCComponent', () => {
  let component: ShopItemPCComponent;
  let fixture: ComponentFixture<ShopItemPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
