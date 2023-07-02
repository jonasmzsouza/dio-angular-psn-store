import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

	private id: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe(
			(value) => (this.id = parseInt(value.get('id')!))
		);
  }

}
