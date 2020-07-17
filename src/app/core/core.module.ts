import { NgModule } from '@angular/core';
//import { NavBarModule } from './component/nav-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error-404/error-404.component';

@NgModule({
	declarations: [
		NavBarComponent,
		Error404Component
	],
	imports: [
		RouterModule.forChild([
			{
				path: '**', component: Error404Component
			}
		])
	],
	exports: [
		NavBarComponent
	]
})

export class CoreModule{

}