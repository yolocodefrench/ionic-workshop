import { NgModule } from '@angular/core';
import { PlaceComponent } from './place/place';
import { UserComponent } from './user/user';
@NgModule({
	declarations: [PlaceComponent,
    UserComponent],
	imports: [],
	exports: [PlaceComponent,
    UserComponent]
})
export class ComponentsModule {}
