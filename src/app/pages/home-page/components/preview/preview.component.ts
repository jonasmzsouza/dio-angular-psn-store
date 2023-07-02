import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';

@Component({
	selector: 'app-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
	@Input()
	games: Game[] = [];

	isEnableBody: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
