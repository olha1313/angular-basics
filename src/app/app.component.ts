import { Component } from '@angular/core';

export interface Post {
	title: string;
	text: string;
	id?: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	posts: Post[] = [
		{
			title: 'What to learn Angular components',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.'
		},
		{
			title: 'Angular is awesome',
			text: 'Lorem ipsum dolor sit amet.'
		}
	]

	public onUpdatePosts(post: Post) {
		this.posts.unshift(post);
	}
}
