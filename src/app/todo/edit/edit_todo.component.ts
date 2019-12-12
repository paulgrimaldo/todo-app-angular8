import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
declare var $: any;
@Component({
    selector: 'edit-todo',
    templateUrl: 'edit_todo.component.html'
})

export class EditTodoComponent implements OnInit {
    @Input() todo: Todo
    @Output() onEditTodo = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    public openEditTodoModal() {
        $('#modal-edit-todo').modal('show');
    }

    public closeEditTodoModal() {
        $('#modal-edit-todo').modal('hide');
    }

    public onClickEditTodo() {
        this.onEditTodo.emit(this.todo);
    }
}