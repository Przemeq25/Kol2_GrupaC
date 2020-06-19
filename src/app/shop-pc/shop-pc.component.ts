import {Component, OnInit} from '@angular/core';
import {PcDataService} from '../services/pc-data.service';


@Component({
  selector: 'shop-pc',
  templateUrl: './shop-pc.component.html',
  styleUrls: ['./shop-pc.component.css']
})
export class ShopPCComponent implements OnInit {
  public items$: any;


  constructor(private service: PcDataService ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.service.getAllItems().subscribe(res => {
      this.items$ = res;
    });
  }

}
