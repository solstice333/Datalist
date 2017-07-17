import { Component } from '@angular/core';

@Component({
  selector: 'mydatalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent {
  opts: string[] = [ 
    'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten'
  ];
  datalist: string[] = [];
  max: number = 5;
  dropdownActive: boolean = false;

  setInput(value: string, inputElem: HTMLInputElement): void {
    inputElem.value = value;
    this.filterOpts(value);
    this.dropdownToggle();
  }

  filterOpts(term: string) {
    this.datalist = this.opts.filter(opt => opt.includes(term) && term !== '');
  }

  dropdownToggle() {
    this.dropdownActive = !this.dropdownActive;
  }
}
