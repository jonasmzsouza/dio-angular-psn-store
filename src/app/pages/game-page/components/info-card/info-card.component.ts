import { Component, Input, OnInit } from '@angular/core';
import { Platform } from 'src/app/shared/models/platform.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {

	@Input()
	gameName: string = '';

	@Input()
	distributor: string = '';

	@Input()
	platforms: Platform[] = [];

	@Input()
	price: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
