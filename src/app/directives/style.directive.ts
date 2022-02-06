import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core'

@Directive({
	selector: '[appStyle]'
})
export class StyleDirective {
	@Input('appStyle') color: string = 'blue';
	@Input() styles!: { border?: string, fontWeight?: string, borderRadius?: string };

	@HostListener('mouseenter')
	onEnter() {
		this.r.setStyle(this.el.nativeElement, 'color', this.color)
		this.r.setStyle(this.el.nativeElement, 'font-weight', this.styles.fontWeight)
		this.r.setStyle(this.el.nativeElement, 'border', this.styles.border)
		this.r.setStyle(this.el.nativeElement, 'border-radius', this.styles.borderRadius)
	}

	@HostListener('mouseleave')
	onLeave() {
		this.r.setStyle(this.el.nativeElement, 'color', null)
		this.r.setStyle(this.el.nativeElement, 'font-weight', null)
		this.r.setStyle(this.el.nativeElement, 'border', null)
		this.r.setStyle(this.el.nativeElement, 'border-radius', null)
	}

	constructor(private el: ElementRef, private r: Renderer2) {}
}
