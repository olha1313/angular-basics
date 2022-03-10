import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
	selector: '[appColor]'
})
export class ColorDirective implements OnChanges {
	@Input('appColor') public color!: string;

	public defaultColor = 'green'

	constructor(private el: ElementRef) {}

	public ngOnChanges(): void {
		this.el.nativeElement.style.backgroundColor = this.color || this.defaultColor;
	}
}
