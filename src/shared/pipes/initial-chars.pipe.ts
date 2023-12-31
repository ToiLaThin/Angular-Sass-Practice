import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'InitialChars'
})
export class InitialCharsPipe implements PipeTransform {
    transform(value: string): string {
        return value.slice(0, 100) + '...';
    }
}