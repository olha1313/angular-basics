import { FormControl } from '@angular/forms';

export class MyValidators {
	static restrictedEmails(control: FormControl): { [key: string]: boolean } | null {
		if (['v@gmail.com', 'test@gmail.com'].includes(control.value)) {
			return { restrictedEmail: true }
		}

		return null;
	}
}
