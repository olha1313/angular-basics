import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about-page.component';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';

@NgModule({
	declarations: [
		AboutPageComponent,
		AboutExtraPageComponent,
	],
	imports: [
		SharedModule,
		CommonModule,
		RouterModule.forChild([
			{ path: '', component: AboutPageComponent, children: [
					{ path: 'extra', component: AboutExtraPageComponent }
				]
			},
		])
	],
	exports: [
		RouterModule
	]
})
export class AboutPageModule {

}
