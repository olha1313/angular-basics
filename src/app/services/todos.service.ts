import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';

export interface Todo {
	completed: boolean,
	title: string,
	id?: number
}

@Injectable({
	providedIn: 'root'
})
export class TodosService {
	public url = 'https://jsonplaceholder.typicode.com/todos';
	public getUrl = 'https://jsonplaceholder.typicode.com/todos';

	constructor(private http: HttpClient) {}

	public addTodo(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>(this.url, todo, {
			headers: new HttpHeaders({ 'myHeader': Math.random().toString() })
		})
	}

	public fetchTodos(): Observable<Todo[] | any> {
		let params = new HttpParams();
		params = params.append('_limit', '4');
		params = params.append('custom', 'anything');

		return this.http.get<Todo[]>(this.getUrl, {
			// params: new HttpParams().set('_limit', '4')
			params,
			observe: 'response'
		})
			.pipe(
				map(response => {
					console.log(response)
					return response.body;
				}),
				delay(500)
			)
	}

	public removeTodo(id?: number): Observable<void | object> {
		return this.http.delete(`${this.url}/id`, {
			observe: 'events'
		})
			.pipe(
				tap(event => {
					if (event.type === HttpEventType.Sent) {
						console.log('sent', event)
					}

					if (event.type === HttpEventType.Response) {
						console.log('response', event)
					}
				})
			)
	}

	public completeTodo(id?: number): Observable<Todo| object> {
		return this.http.put(`${this.url}/id`, {
			completed: true
		})
			.pipe(
				catchError (error => {
				return throwError(error);
			})
		)
	}
}
