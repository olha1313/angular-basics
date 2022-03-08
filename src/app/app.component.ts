import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from './services/todos.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public todos: Todo[] = [];
	public todoTitle = '';
	public loading = false;

	constructor(private todosService: TodosService) {}

	public ngOnInit(): void {
		this.fetchTodos();
	}

	public addTodo(): void {
		if (!this.todoTitle.trim()) {
			return
		}

		const newTodo: Todo = {
			title: this.todoTitle,
			completed: false
		}

		this.todosService.addTodo(newTodo)
			.subscribe(todo => {
				this.todos.push(todo);
				this.todoTitle = '';
			})
	}

	public fetchTodos(): void {
		this.loading = true;

		this.todosService.fetchTodos()
			.subscribe(todos => {
				this.todos = todos;

				this.loading = false;
			})
	}

	public removeTodo(id?: number): void {
		this.todosService.removeTodo(id)
			.subscribe(() => {
				this.todos = this.todos.filter(todo => todo.id !== id)
			})
	}
}
