import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

//Import components 
import { TodoComponent } from "./todo/todo.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from './error/error.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'todos', component: TodoComponent },
    { path: 'todos/:todoId', component: TodoComponent },
    { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);