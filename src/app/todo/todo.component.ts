import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from "./todo.service";
import { TodoRestService } from "./todo_rest.service";
import { Todo } from './todo';

@Component({
    selector: 'todos',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService, TodoRestService]
})

export class TodoComponent implements OnInit {
    private todos: Array<Todo>;
    private todo: Todo;
    constructor(private _route: ActivatedRoute, private _router: Router, private _todoService: TodoService, private _todoRestService: TodoRestService) { }

    ngOnInit() {
        this.todo = new Todo(null, null, null);
        //call from local service this.todos = this._todoService.getTodos();
        this._todoRestService.getTodos().subscribe(
            result => this.todos = result,
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

    onClickDeleteTodo(todoId: number) {
        console.log(todoId);
    }

    onClickEditTodo(todoId: number) {
        console.log(todoId);
    }

    onClickAddTodo() {
        this.todos.push(this.todo);
    }
}