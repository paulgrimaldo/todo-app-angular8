import { Injectable } from "@angular/core";
import { Todo } from './todo';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class TodoRestService {
    constructor(private db: AngularFirestore) {
    }

    public getTodos() {
        return this.db.collection('todos').snapshotChanges();
    }

    public addTodo(todo: Todo) {
        return this.db.collection('todos').add({
            title: todo.title,
            created_at: todo.created_at
        });
    }

    public editTodo(todo: Todo) {
        return this.db.collection('todos').doc(todo.id).set({
            title: todo.title,
            created_at: todo.created_at
        });
    }

    public deleteTodo(todoId: string) {
        return this.db.collection('todos').doc(todoId).delete();
    }
}