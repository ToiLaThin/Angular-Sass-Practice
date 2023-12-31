import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output('toggle') toggleSwitchEventEmitter = new EventEmitter<any>();

  toggle() {
    this.toggleSwitchEventEmitter.emit();
  }
}
