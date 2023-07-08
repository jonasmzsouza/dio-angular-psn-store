import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesMock } from 'src/app/mocks/games.mock';
import { Game } from 'src/app/shared/models/game.model';

@Component({
	selector: 'app-game-page',
	templateUrl: './game-page.component.html',
	styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
	private id: number | null = null;

	game: Game = {
		id: 0,
		name: '',
		imgCoverUrl: '',
		imgBackgroundUrl: '',
		type: '',
		price: '',
		shortDescription: '',
		release: '',
		distributor: '',
		rights: '',
		isPreview: false,
		genres: [],
		platforms: [],
		compatibilities: [],
	};

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(
			(value) => (this.id = parseInt(value.get('id')!))
		);
		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id: number | null) {
		const result = GamesMock.filter((game) => game.id == id)[0];
		this.game = result;
	}
}
