import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
	public counter = 0;

	public increase() {
		this.counter++
	}

	public decrease() {
		this.counter--
	}
}
