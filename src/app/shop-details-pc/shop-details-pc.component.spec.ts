import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsPCComponent } from './shop-details-pc.component';

describe('ShopDetailsPCComponent', () => {
  let component: ShopDetailsPCComponent;
  let fixture: ComponentFixture<ShopDetailsPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
