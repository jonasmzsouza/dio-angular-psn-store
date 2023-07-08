import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent, pathMatch: 'full' },
	{ path: 'games/:id', component: GamePageComponent },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		scrollPositionRestoration: 'enabled',
	})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
