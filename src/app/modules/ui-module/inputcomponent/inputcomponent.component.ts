import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  @Input() type: string='text';
  @Input() placeholder: string = 'please select';
  @Input() controlName: string = '';
  @Input() groupInstance !: FormGroup;
  @Input() maxLength: number|string = '';
  @Input() minLength: number|string = '';
  @Input() maxValue = 0;
  @Input() patternError = '';
  @Input() minValue = 0;
  @Input() className ='';
  @Output() blur = new EventEmitter<any>;
  @Output() change = new EventEmitter<any>;
  public disableInput: boolean = false;
  @Input() set disabled(des: boolean) {
    this.disableInput = des;
  };
  //@Input() className: string;

  ngOnInit(): void {
  }

  public inputBlur(): void {
    this.blur.emit(true);
  }

  public inputChange(): void {
    this.change.emit(true); 
  }
 
}
 