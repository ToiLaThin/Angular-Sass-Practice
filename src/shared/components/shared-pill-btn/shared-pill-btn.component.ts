import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-pill-btn',
  templateUrl: './shared-pill-btn.component.html',
  styleUrls: ['./shared-pill-btn.component.scss']
})
export class SharedPillBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('label') lbl!: string;
  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  onClicked() {
    this.clickEmitter.emit();
  }
}
