import { Component, Input, OnInit } from '@angular/core';
import { Compatibility } from 'src/app/shared/models/compatibility.model';

@Component({
  selector: 'app-info-compatibilities',
  templateUrl: './info-compatibilities.component.html',
  styleUrls: ['./info-compatibilities.component.css']
})
export class InfoCompatibilitiesComponent implements OnInit {

	@Input()
	compatibilities: Compatibility[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
