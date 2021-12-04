import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo(event: any): void {
    this.todoService.addTodo(event).subscribe((todo) => {
      this.todos.push(todo);
      console.log(todo);
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe((res) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
}
