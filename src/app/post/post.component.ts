import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	public post!: Post;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private postService: PostsService
	) {}

	public ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			// @ts-ignore
			this.post = this.postService.getById(+params['id'])
		})
	}

	public loadPost(): void {
		this.router.navigate(['/posts', 44])
	}
}
