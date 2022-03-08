import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, throwError } from 'rxjs';

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

	public fetchTodos(): Observable<Todo[]> {
		let params = new HttpParams();
		params = params.append('_limit', '4');
		params = params.append('custom', 'anything');

		return this.http.get<Todo[]>(this.getUrl, {
			// params: new HttpParams().set('_limit', '4')
			params
		})
			.pipe(delay(500))
	}

	public removeTodo(id?: number): Observable<void | object> {
		return this.http.delete(`${this.url}/id`)
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
