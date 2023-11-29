import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrls: ['./buttoncomponent.component.css']
})
export class ButtoncomponentComponent implements OnInit {

  constructor() { }

  public disableButton = false;
  @Input() set disabled(des: boolean) {
    this.disableButton = des;
  };
  @Input() value: string= 'Get OTP';
  @Input() className: string = '';
  @Input() showIcon: boolean = false;
  @Input() playIcon: boolean = false; 
  @Input() pauseIcon: boolean = false;
  @Output() clickEmitter = new EventEmitter<any>();

  ngOnInit(): void {
  }

  public onClickButton(): void {
    this.clickEmitter.emit();
  }
}
