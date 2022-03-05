import { FormControl, ValidationErrors } from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
	static restrictedEmails(control: FormControl): ValidationErrors | null {
		if (['v@gmail.com', 'test@gmail.com'].includes(control.value)) {
			return { restrictedEmail: true }
		}

		return null;
	}

	static uniqEmail(control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		return new Promise(resolve => {
			setTimeout(() => {
				if (control.value === 'async@gmail.com') {
					resolve({ uniqEmail: true })
				} else {
					resolve(null)
				}
			}, 1000)
		})
	}
}
