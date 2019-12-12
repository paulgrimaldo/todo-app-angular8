import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoRestService } from "./todo_rest.service";
import { Todo } from './todo';
import { AddTodoComponent } from './add/add_todo.component';
import { EditTodoComponent } from './edit/edit_todo.component';
import { DeleteTodoComponent } from './delete/delete_todo.component';
@Component({
    selector: 'todos',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoRestService]
})

export class TodoComponent implements OnInit, AfterViewInit {
    @ViewChild(AddTodoComponent, { static: false })
    private addTodoModal: AddTodoComponent;
    @ViewChild(EditTodoComponent, { static: false })
    private editTodoModal: EditTodoComponent;
    @ViewChild(DeleteTodoComponent, { static: false })
    private deleteTodoModal: DeleteTodoComponent;

    private todos: any[];
    private clickedTodo: Todo;
    constructor(private _route: ActivatedRoute, private _todoRestService: TodoRestService) {
        this.clickedTodo = new Todo(null, null, null);
    }

    ngOnInit() {
        this._todoRestService.getTodos().subscribe(
            result => this.todos = result.map((dbTodo) => {
                let todoDocument = dbTodo.payload.doc;
                return new Todo(todoDocument.id, todoDocument.data().title, new Date(todoDocument.data().created_at.seconds * 1000));
            }),
            error => console.log(<any>error)
        );
        this._route.params.forEach((param: Params) => {
            let todoId = param['todoId'];
            if (todoId != undefined) {
                this.todos = this.todos.filter(todo => todo.id == todoId);
            }
        })
    }

    ngAfterViewInit(): void {
    }

    openAddTodoModal() {
        this.addTodoModal.openAddTodoModal();
    }

    onClickAddTodo(event: any) {
        let todo = event;
        this._todoRestService.addTodo(todo);
        this.addTodoModal.closeAddTodoModal();
    }

    onClickDeleteTodo(todo: Todo) {
        this.clickedTodo = { id: todo.id, title: todo.title, created_at: todo.created_at };
        this.deleteTodoModal.openDeleteTodoModal();
    }

    onClickEditTodo(todo: Todo) {
        this.clickedTodo = { id: todo.id, title: todo.title, created_at: todo.created_at };
        this.editTodoModal.openEditTodoModal();
    }

    onEditTodo(event: any) {
        let todo = event;
        this._todoRestService.editTodo(todo);
        this.editTodoModal.closeEditTodoModal();
    }

    onDeleteTodo(event: any) {
        let todo = event;
        this._todoRestService.deleteTodo(todo.id);
        this.deleteTodoModal.closeDeleteTodoModal();
    }
}