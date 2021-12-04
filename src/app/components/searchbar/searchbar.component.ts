import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  todo: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleAddTodo() {
    const todo = {
      title: this.todo.trim(),
      completed: false,
    };

    this.addTodo.emit(todo);
  }
}
