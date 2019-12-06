import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { TodoConvertorPipe } from "./pipes/todo_convertor.pipe";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    ContactComponent,
    TodoConvertorPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
