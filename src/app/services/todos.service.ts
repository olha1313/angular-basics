import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

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
	public getUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=2';

	constructor(private http: HttpClient) {}

	public addTodo(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>(this.url, todo)
	}

	public fetchTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(this.getUrl)
			.pipe(delay(500))
	}

	public removeTodo(id?: number): Observable<void | object> {
		return this.http.delete(`${this.url}/id`)
	}
}
