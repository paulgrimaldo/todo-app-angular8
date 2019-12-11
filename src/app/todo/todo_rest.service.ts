import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Todo } from './todo';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class TodoRestService {
    constructor(private _http: Http, private db: AngularFirestore) {
    }

    public getTodos() {
        return this.db.collection('todos').snapshotChanges();
    }

    public addTodo(todo: Todo) {
        return this.db.collection('todos').add({
            tittle: todo.title,
            created_at: todo.created_at
        });
    }
    /*
    public getTodos() {
        return this._http.get(this.url)
            .pipe(map((response: Response) => response.json()))
            .pipe(map(jsonTodos => jsonTodos.map((todo: { id: number; title: string; }) => new Todo(todo.id, todo.title, new Date))))
    }
    */
}