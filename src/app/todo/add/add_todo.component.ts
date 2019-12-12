import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
declare var $: any;
@Component({
    selector: 'add-todo',
    templateUrl: 'add_todo.component.html'
})

export class AddTodoComponent implements OnInit {
    private todo: Todo;
    @Output() onAddTodo = new EventEmitter();
    constructor() { }

    ngOnInit() {
        this.todo = new Todo(null, null, null);
    }

    public onClickAddTodo() {
        this.todo.created_at = new Date();
        this.onAddTodo.emit(this.todo);
    }

    public openAddTodoModal() {
        $('#modal-add-todo').modal('show');
    }

    public closeAddTodoModal() {
        $('#modal-add-todo').modal('hide');
    }
}