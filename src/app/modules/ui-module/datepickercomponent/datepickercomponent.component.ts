import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepickercomponent',
  templateUrl: './datepickercomponent.component.html',
  styleUrls: ['./datepickercomponent.component.css'],

})

export class DatepickercomponentComponent implements OnInit {
	@Input() showIcon: boolean = false;
  constructor() {
	
  }
  
  @Input() type: string='text';
  @Input() placeholder: string = 'please select';
  @Input() controlName: string = '';
  @Input() groupInstance !: FormGroup;
  public disableDate: boolean = false;
  @Input() set disabled(des: boolean) {
    this.disableDate = des;
  };


  ngOnInit(): void {
  }


}
