import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public form!: FormGroup;

	public ngOnInit(): void {
			this.form = new FormGroup({
				email: new FormControl('', [Validators.email, Validators.required]),
				password: new FormControl('', [Validators.required, Validators.minLength(10)]),
				address: new FormGroup({
					country: new FormControl('ua'),
					city: new FormControl('Kiev', Validators.required)
				})
			})
	}

	public submit() {
		if(this.form.valid) {
			console.log('Form', this.form);
			const formData = { ...this.form.value };

			console.log(formData)
		}
	}

	public setCapital(): void {
		const cityMap = {
			ua: 'Kiev',
			uk: 'London',
			us: 'Washington'
		}

		const cityKey = this.form.get('address')?.get('country')?.value;
		//@ts-ignore
		const city = cityMap[cityKey]

    this.form.patchValue({ address: { city } })
	}
}
