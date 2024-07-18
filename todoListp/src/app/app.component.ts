import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoList';
  localSetItem: string | null;
  list: Todo[];
  todoValue: string;

  constructor() { 
    this.localSetItem = localStorage.getItem('list');
    if (this.localSetItem === null) {
      this.list = [];
    } else {
      this.list = JSON.parse(this.localSetItem);
    }
    this.todoValue = '';
  }
          
  ngOnInit(): void {
    // Initialization if necessary, but list and todoValue are already set in the constructor
  }

  addItem(): void {
    if (this.todoValue.trim() !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
      localStorage.setItem('list', JSON.stringify(this.list));
      this.todoValue = '';
    }
  }

  deleteItem(id: number): void {
    this.list = this.list.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}
