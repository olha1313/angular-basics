import { Component } from '@angular/core';

export interface Post {
	title: string,
	text: string,
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public e: number = Math.E;
	public str = 'hello world'
	public date: Date = new Date();
	public float = 0.42;
	public obj = {
		a: 1,
		b: {
			c:2,
			b: {
				e: 3,
				f: 4,
			}
		}
	};

	public search = '';
	public searchField: string = 'title';

	public posts: Post[] = [
		{title: 'Javascript', text: 'The best language'},
		{title: 'Typescript', text: 'Is awesome'},
		{title: 'HTML', text: 'Cool!'}
	]

	public addPost(): void {
		this.posts.unshift({
			title: 'Angular 8',
			text: 'New version of Angular'
		})

	}
}
