import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add/add_todo.component';
import { EditTodoComponent } from './todo/edit/edit_todo.component';
import { DeleteTodoComponent } from './todo/delete/delete_todo.component';
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { ContactComponent } from "./contact/contact.component";
import { TodoConvertorPipe } from "./pipes/todo_convertor.pipe";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    DeleteTodoComponent,
    HomeComponent,
    ErrorComponent,
    ContactComponent,
    TodoConvertorPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
