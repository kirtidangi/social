import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectcomponent',
  templateUrl: './selectcomponent.component.html',
  styleUrls: ['./selectcomponent.component.css']
})

export class SelectcomponentComponent implements OnInit {

  constructor() { }

  public disableSelect: boolean = false;
  @Input() set disabled(des: boolean) {
    this.disableSelect = des;
  };
  @Input() options !: {id:number , title?:string, value?: string}[];
  @Input() controlName: string = '';
  @Input() groupInstance !: FormGroup;
  @Output() change = new EventEmitter<any>();
  @Input() selectOption = false;
  @Input() allOption = false;
  

  ngOnInit(): void {
  }

  changeEmitter():void {
    this.change.emit();
  }

}
