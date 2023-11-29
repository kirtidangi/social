import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  constructor() { }

  @Input() placeholder: string = 'Type';
  @Input() controlName: string = '';
  @Input() groupInstance !: FormGroup;
  public disableTextarea: boolean = false;
  @Input() set disabled(des: boolean) {
    this.disableTextarea = des;
  };
  
  ngOnInit(): void {
  }

}
