import { Component, OnInit } from '@angular/core'
import { PostsService } from '../posts.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	public showIds = false;

	constructor(
		public postsService: PostsService,
		public route: ActivatedRoute,
		private router: Router
	) {}

	public ngOnInit(): void {
		this.route.queryParams.subscribe((params: Params) => {
			this.showIds = !!params['showIds'];
		})

		this.route.fragment.subscribe(fragment => {
			console.log(fragment)
		})
	}

	public showIdsProgram(): void {
		this.router.navigate(['/posts'], {
			queryParams: {
				showIds: true
			},
			fragment: 'programFragment'
		})
	}
}
