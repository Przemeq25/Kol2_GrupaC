import {Component, Input, OnInit} from '@angular/core';
import {PcDataService} from '../services/pc-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'shop-details-pc',
  templateUrl: './shop-details-pc.component.html',
  styleUrls: ['./shop-details-pc.component.css']
})
export class ShopDetailsPCComponent implements OnInit {
  public image = '';
  public text: string;
  public price: number;
  public id: string;
  public title: string;

  constructor(private service: PcDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> {
      this.id = params.get('id');
    });

    this.service.getItemById(this.id).subscribe(res=>{
      console.log(res);
    })
  }

}
