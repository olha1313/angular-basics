import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {
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

	public ngOnInit() {
		setTimeout(() => {
			console.log('timeout')
			this.posts[0] = {
				title: 'Changed',
				text: 'Changed text'
			}
		}, 2000)
	}

	public onUpdatePosts(post: Post) {
		this.posts.unshift(post);
	}

	public onRemovePost(id: number) {
		this.posts = this.posts.filter(post => post.id !== id)
	}
}
