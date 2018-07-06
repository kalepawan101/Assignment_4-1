import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() public pData;
  
  @Output() public myEvent = new EventEmitter();

  public sendEvent(){
    this.myEvent.emit('Message For Parent Component From Child');
  }

}
