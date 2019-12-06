import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Todo } from './todo';

@Injectable()
export class TodoRestService {
    private url: string;
    constructor(private _http: Http) {
        this.url = "https://jsonplaceholder.typicode.com/todos";
    }

    public getTodos() {
        return this._http.get(this.url)
            .pipe(map((response: Response) => response.json()))
            .pipe(map(jsonTodos => jsonTodos.map((todo: { id: number; title: string; }) => new Todo(todo.id, todo.title, new Date))))
    }
}