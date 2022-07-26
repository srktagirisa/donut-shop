import { Component } from '@angular/core';
import { Donuts } from './interfaces/donuts-api-model';
import { DonutsApiService } from './donuts-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donut-shop';

  donuts: Donuts = {
    results: [{
      id: 0,
      ref: "",
      name: ""
    }
    ]
  };

  constructor(private donutsApiService: DonutsApiService) {}

  ngOnInit(): void {
  }
}
