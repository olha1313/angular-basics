import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-counter',
	template: `Counter: {{ counter}}`
})
export class CounterComponent {
	@Output() counterEmitter = new EventEmitter<number>();

	public counter = 0;
	public form!: FormGroup;

	constructor(public formBuilder: FormBuilder) {
		this.form = formBuilder.group({
			login: ['', Validators.required],
			email: ['']
		})
	}

	public increment(): void {
		this.counter++;
		this.counterEmitter.emit(this.counter);
	}

	public decrement(): void {
		this.counter--;
	}
}
