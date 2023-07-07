import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre.model';
import { Platform } from 'src/app/shared/models/platform.model';

@Component({
  selector: 'app-info-resume',
  templateUrl: './info-resume.component.html',
  styleUrls: ['./info-resume.component.css'],
})
export class InfoResumeComponent implements OnInit {

	@Input()
	shortDescription: string = '';

	@Input()
	platforms: Platform[] = [];

	@Input()
	release: string = '';

	@Input()
	distributor: string = '';

	@Input()
	genres: Genre[] = [];

	@Input()
	rights: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
