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
	showButton: boolean = true;
	preview: string = 'preview__item';

	constructor() {}

	ngOnInit(): void {}

	showItens(show: string) {
		this.preview = show;
		this.showButton = !this.showButton;
	}
}
