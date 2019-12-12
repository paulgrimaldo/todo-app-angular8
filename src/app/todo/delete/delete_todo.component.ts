import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../todo';
declare var $: any;
@Component({
    selector: 'delete-todo',
    templateUrl: 'delete_todo.component.html'
})

export class DeleteTodoComponent implements OnInit {
    @Input() todo: Todo;
    @Output() onDeleteTodo = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    onConfirmDeleteTodo() {
        this.onDeleteTodo.emit(this.todo);
    }

    public openDeleteTodoModal() {
        $('#modal-delete-todo').modal('show');
    }

    public closeDeleteTodoModal() {
        $('#modal-delete-todo').modal('hide');
    }
}