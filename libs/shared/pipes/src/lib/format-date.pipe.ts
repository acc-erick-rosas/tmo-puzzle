import { Pipe, PipeTransform } from '@angular/core';  
 
 @Pipe ({ 
    name: 'formatDate' 
 }) 
 
 export class FormatDatePipe implements PipeTransform { 
    transform(value: string | void): string { 
        return value
        ? new Intl.DateTimeFormat('en-US').format(new Date(value))
        : undefined;
    } 
 } 