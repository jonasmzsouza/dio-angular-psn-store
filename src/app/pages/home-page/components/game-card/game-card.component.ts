import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/shared/models/game.model';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-game-card',
	templateUrl: './game-card.component.html',
	styleUrls: ['./game-card.component.css'],
	standalone: true,
	imports: [CommonModule, RouterModule]
})
export class GameCardComponent implements OnInit {

	@Input()
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
		genres: [
			{
				id: 0,
				name: '',
			},
		],
		platforms: [
			{
				id: 0,
				name: '',
			},
		],
		compatibilities: [
			{
				id: 0,
				name: '',
			},
		],
	};

	@Input()
	isEnableBody: boolean = true

	constructor() {}

	ngOnInit(): void {}
}
