import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Html2PlainText'
})
export class HtmlToTextPipe implements PipeTransform {
    transform(value: any): string {
        const temp = document.createElement('div');
        temp.innerHTML = value; //html content is stored in side temp
        return temp.textContent || temp.innerText || ''
    }
}