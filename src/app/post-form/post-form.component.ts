import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() public onAdd: EventEmitter<Post> = new EventEmitter<Post>();

	public title = '';
	public text = '';

	constructor() { }

	ngOnInit() {}

	public onAddPost() {
		if (this.title.trim() && this.title.trim()) {
			const post: Post = {
				title: this.title,
				text: this.text
			}

			this.onAdd.emit(post);

			this.title = this.text = '';
		}
	}

}
