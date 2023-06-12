import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sc-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss']
})
export class NotificationBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = "";
  @Input() message: string = "";
  @Input('isOkCancelBtn') isOkCancelBtn: boolean = false; /*default value*/
  @Output('onCloseBtnClick') btnCloseClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output('onOkBtnClick') btnOkClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output('onCancelBtnClick') btnCancelClickEvent: EventEmitter<any> = new EventEmitter<any>();

  BtnCloseClickHandler() {
    this.btnCloseClickEvent.emit();
  }
  BtnOkClickHandler() {
    this.btnOkClickEvent.emit();
  }
  BtnCancelClickHandler() {
    this.btnCancelClickEvent.emit();
  }
}
