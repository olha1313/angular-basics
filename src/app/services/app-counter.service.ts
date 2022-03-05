import { Injectable } from '@angular/core';
import {LogService} from './log.service';

@Injectable({
	providedIn: 'root'
})
export class AppCounterService {
	public counter = 0;

	constructor(private logService: LogService) {}

	public increase() {
		this.logService.log('increase counter....');
		this.counter++
	}

	public decrease() {
		this.logService.log('decrease counter....');
		this.counter--
	}
}
