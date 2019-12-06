import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'todo_convertor'
})

export class TodoConvertorPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
    }
}