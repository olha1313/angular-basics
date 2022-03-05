import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SwitchComponent),
	multi: true
}

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss'],
	providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {
	public state = 'off'
	private onChange = (value: any) => {};

	public setState(state: string) {
		this.state = state;

		this.onChange(this.state);
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
	}

	public writeValue(state: string): void {
		this.state = state;
	}
}
