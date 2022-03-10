import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from "./posts/posts.component";
import { RoutingComponent } from './routing/routing.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		PostsComponent,
  RoutingComponent,
  NavbarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([]),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
