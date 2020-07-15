import { NgModule} from '@angular/core';
import { StarComponent } from './star.component';

@NgModule({
	declarations: [
		StarComponent
	],
	exports: [ // serve p dizer ao angular que queremos expotar alguma coisa deste módulo	
		StarComponent
	
	]

		
})

export class StarModule{

}