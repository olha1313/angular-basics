import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isAuth = false;

	public login(): void {
		this.isAuth = true
	}

	public logout(): void {
		this.isAuth = false
	}

	public isAuthenticated(): Promise<boolean> {
		return new Promise<boolean>(resolve => {
			setTimeout(() => {
				resolve(this.isAuth)
			}, 1500)
		})
	}
}
