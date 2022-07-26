import { Component, Input, OnInit } from '@angular/core';
import { DonutsApiService } from 'src/app/donuts-api.service';
import { Donuts } from 'src/app/interfaces/donuts-api-model';

@Component({
  selector: 'app-donuts-list',
  templateUrl: './donuts-list.component.html',
  styleUrls: ['./donuts-list.component.css']
})
export class DonutsListComponent implements OnInit {

  @Input() donutsList: Donuts = {
    results: [
      {
        id: 0,
        ref: "",
        name: ""
      }
    ]
  }
  constructor(private donutsApiService: DonutsApiService) { }

  ngOnInit(): void {
    this.donutsApiService.fetchDonutsList().subscribe( data => {
      console.log(data);
      this.donutsList = data
    })
  }

}
