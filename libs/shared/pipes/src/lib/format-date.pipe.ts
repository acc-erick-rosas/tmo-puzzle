import { Pipe, PipeTransform } from '@angular/core';  
 
 @Pipe ({ 
    name: 'formatDate' 
 }) 
 
 export class FormatDatePipe implements PipeTransform { 
    transform(value: string | void): string {
        let formatedValue;
        try {
            formatedValue = value 
            ? new Intl.DateTimeFormat('en-US').format(new Date(value))
            : undefined;
        } finally {
            return formatedValue;
        }
    } 
 } 