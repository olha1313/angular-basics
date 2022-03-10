import { ColorDirective } from './color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
	template: `<p appColor="yellow"></p> <p appColor></p>`
})
class HostComponent {}

describe('ColorDirective', () => {
	let fixture: ComponentFixture<HostComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ColorDirective, HostComponent]
		});

		fixture = TestBed.createComponent(HostComponent);
		fixture.detectChanges();
	});

	it('should create an instance', () => {
		// @ts-ignore
		const directive = new ColorDirective(null);
		expect(directive).toBeTruthy();
	});

	it('should apply input color', () => {
		let debug = fixture.debugElement.queryAll(By.css('p'))[0];

		expect(debug.nativeElement.style.backgroundColor).toBe('yellow');
	});

	it('should apply default color', () => {
		let debug = fixture.debugElement.queryAll(By.css('p'))[1];
		let directive = debug.injector.get(ColorDirective);

		expect(debug.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
	});
});
