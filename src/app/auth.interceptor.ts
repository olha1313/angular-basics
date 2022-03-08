import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('intercept', req);

		const clone = req.clone({
			headers: req.headers.append('Auth', 'Some random token')
		});

		return next.handle(clone)
			.pipe(
				tap(event => {
					if (event.type === HttpEventType.Response) {
						console.log('Interceptor response event', event)
					}
				})
			);
	}
}
