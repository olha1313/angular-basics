import {Component} from '@angular/core';

@Component({
	selector: 'app-counter',
	template: `Counter: {{ counter}}`
})
export class CounterComponent {
	public counter = 0;

	public increment(): void {
		this.counter++;
	}

	public decrement(): void {
		this.counter--;
	}
}
