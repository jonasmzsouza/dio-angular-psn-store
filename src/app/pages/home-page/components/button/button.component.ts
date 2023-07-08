import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css'],
	standalone: true,
	imports: [CommonModule, RouterModule]
})
export class ButtonComponent implements OnInit {


	@Output()
	isShowItens: EventEmitter<string> = new EventEmitter();

	isButtonActive: boolean = true;
	show: string = 'preview__item';

	constructor() {}

	ngOnInit(): void { }

	showItens() {
		this.show =
			this.show == 'preview__item'
				? 'preview__item show'
				: 'preview__item';

		this.isShowItens.emit(this.show);
	}
}
