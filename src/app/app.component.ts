import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public form!: FormGroup;
	public skills!: AbstractControl[];

	public ngOnInit(): void {
		this.form = new FormGroup({
			// @ts-ignore
				email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails], MyValidators.uniqEmail),
				password: new FormControl('', [Validators.required, Validators.minLength(10)]),
				address: new FormGroup({
					country: new FormControl('ua'),
					city: new FormControl('Kiev', Validators.required)
				}),
				skills: new FormArray([])
			})
	}

	public submit() {
		if(this.form.valid) {
			console.log('Form', this.form);
			const formData = { ...this.form.value };

			console.log(formData)

			this.form.reset();
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

	public addSkill() {
		const control = new FormControl('', Validators.required);
		(<FormArray>this.form.get('skills')).push(control)
		// (this.form.get('skills') as FormArray).push(control)

		this.skills = (this.form?.get('skills') as FormArray)?.controls
	}
}
