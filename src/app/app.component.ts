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
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.',
			id: 1
		},
		{
			title: 'Angular is awesome',
			text: 'Lorem ipsum dolor sit amet.',
			id: 2
		}
	]

	public onUpdatePosts(post: Post) {
		this.posts.unshift(post);
	}

	public onRemovePost(id: number) {
		this.posts = this.posts.filter(post => post.id !== id)
	}
}
