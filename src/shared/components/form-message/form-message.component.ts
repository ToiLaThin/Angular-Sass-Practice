import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() message!: string;

}
