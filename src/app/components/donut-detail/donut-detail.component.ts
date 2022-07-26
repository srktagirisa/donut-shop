import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutsApiService } from 'src/app/donuts-api.service';
import { DonutsServiceService } from 'src/app/donuts-service.service';
import { DonutDetails, Result } from 'src/app/interfaces/donuts-api-model';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  donutData?: DonutDetails;

  @Input() result?: Result[];

  constructor(
    private route: ActivatedRoute,
    private donutsApiService: DonutsApiService,
    private donutsServiceService: DonutsServiceService) { }

  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      console.log('params: '+params['id'])
      this.donutsApiService.fetchDonutDetails(parseInt(params['id']))
      .subscribe((data) => {
        console.log(data);
        this.donutData = data;
      })
    })
  }

  addToCart(): void {
    console.log('add to cart: '+this.donutData);
    if (this.donutData)
    {
     
      this.donutsServiceService.addToCart(this.donutData);
    }
  }
}
