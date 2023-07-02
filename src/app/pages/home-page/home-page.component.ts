import { Component, OnInit } from '@angular/core';
import { GamesMock } from 'src/app/mocks/games.mock';
import { Game } from 'src/app/shared/models/game.model';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
	preview: Array<Game> = [];
	newGames: Array<Game> = [];
	preOrder: Array<Game> = [];

	constructor() {}

	ngOnInit(): void {
		const gamesMock = GamesMock;

		gamesMock.forEach((game) => {
			if (game.isPreview) {
				this.preview.push(game);
			}
		});

		gamesMock.forEach((game) => {
			if (game.type == 'NEW') {
				this.newGames.push(game);
			}

			if (game.type == 'PRE-ORDER') {
				this.preOrder.push(game);
			}
		});
	}
}
