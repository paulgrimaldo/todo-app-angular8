import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: 'error.component.html'
})

export class ErrorComponent implements OnInit {
    public tittle: string;

    construtor() {
    }

    ngOnInit() {
        this.tittle = "Opps... ocurrió un error inesperado";
    }
}