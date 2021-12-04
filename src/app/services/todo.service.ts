import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=7';

  constructor(private https: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.https.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.https.post<Todo>(this.todosUrl, todo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.https.put(url, todo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.https.delete<Todo>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
