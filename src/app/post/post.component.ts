import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../posts.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	public post!: Post;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	public ngOnInit(): void {
		// this.post = this.route.snapshot.data['post'];

		this.route.data.subscribe(data => {
			this.post = data['post']
		})

		// this.route.params.subscribe((params: Params) => {
		// 	// @ts-ignore
		// 	this.post = this.postService.getById(+params['id'])
		// })
	}

	public loadPost(): void {
		this.router.navigate(['/posts', 44])
	}
}
