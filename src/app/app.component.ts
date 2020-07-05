import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { displayPartsToString } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';

  calcForm = new FormGroup({});
  options: FormlyFormOptions = {};
  model = { display: '' };

  numericKeys = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };

  fields: FormlyFieldConfig[] = [{
    key: 'display',
    type: 'input',
    templateOptions: {
      id: 'display',
      value: 'my display'
     }
  }];

  constructor() {

    /* for (const [key, value] of Object.entries(this.numericKeys)) {
      this.fields.push({
        type: 'button',
        templateOptions: {
          text: `${value}`,
          id: `${key}`,
          onClick: ($event) => {
            this.calcForm.get('display').setValue(`${value}`);
          },
        }
      })
    }*/
  }

  submit() {
   console.log(this.fields);
  }

}
