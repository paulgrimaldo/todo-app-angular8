import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoRestService } from "./todo_rest.service";
import { Todo } from './todo';
import { Observable } from 'rxjs';
declare var $: any
@Component({
    selector: 'todos',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoRestService]
})

export class TodoComponent implements OnInit {
    private todos: any[];
    private todo: Todo;
    constructor(private _route: ActivatedRoute, private _router: Router, private _todoRestService: TodoRestService) { }

    ngOnInit() {
        this.todo = new Todo(null, null, null);
        this._todoRestService.getTodos().subscribe(
            result => this.todos = result.map((dbTodo) => {
                let todoDocument = dbTodo.payload.doc;
                return new Todo(todoDocument.id, todoDocument.data().tittle, new Date(todoDocument.data().created_at.seconds * 1000));
            }),
            error => {
                console.log(<any>error);
            }
        );
        this._route.params.forEach((param: Params) => {
            let todoId = param['todoId'];
            if (todoId != undefined) {
                this.todos = this.todos.filter(todo => todo.id == todoId);
            }
        })
    }

    onClickDeleteTodo(todoId: string) {
        console.log(todoId);
    }

    onClickEditTodo(todoId: string) {
        console.log(todoId);
    }

    onClickAddTodo() {
        this.todo.created_at = new Date();
        this._todoRestService.addTodo(this.todo);
        this.closeAddTodoModal();
    }

    closeAddTodoModal(){
        $('#modal-add-todo').modal('hide');
    }

    openAddTodoModal() {
        $('#modal-add-todo').modal('show');
    }
}