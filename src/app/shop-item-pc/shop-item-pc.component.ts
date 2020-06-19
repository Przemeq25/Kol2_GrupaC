import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-item-pc',
  templateUrl: './shop-item-pc.component.html',
  styleUrls: ['./shop-item-pc.component.css']
})
export class ShopItemPCComponent implements OnInit {
  @Input() image: string;
  @Input() price: number;
  @Input() text: string;
  @Input() title: string;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
