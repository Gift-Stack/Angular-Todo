import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  handleToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe();
  }

  handleDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
