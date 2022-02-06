import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	DoCheck,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
	ViewEncapsulation
} from '@angular/core';
import { Post } from '../app.component';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
	@Input() public post!: Post;
	@Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
	@ContentChild('info', {static: true}) infoRef!: ElementRef;

	constructor() {
		// console.log('constructor')
	}

	public ngOnChanges(changes: SimpleChanges) {
		// console.log('ngOnChanges', changes)
	}

	public ngOnInit() {
		// console.log('ngOnInit')
	}

	public ngDoCheck() {
		// console.log('ngDoCheck')
	}

	public ngAfterContentInit() {
		// console.log('ngAfterContentInit')
	}

	public ngAfterContentChecked() {
		// console.log('ngAfterContentChecked')
	}

	public ngAfterViewInit() {
		// console.log('ngAfterViewInit')
	}

	public ngAfterViewChecked() {
		// console.log('ngAfterViewChecked')
	}

	public ngOnDestroy() {
		// console.log('ngOnDestroy')
	}

	public onRemovePost() {
		this.onRemove.emit(this.post.id)
	}
}
