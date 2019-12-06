import { Injectable } from "@angular/core";
import { Todo } from './todo';

@Injectable()
export class TodoService {
    private todos: Array<Todo> = [
        new Todo(1, 'Do homework', new Date),
        new Todo(2, 'Finish todo app', new Date),
        new Todo(3, 'Transform sign serve to microservice', new Date)
    ]
    public getTodos(): Array<Todo> {
        return this.todos;
    }
}