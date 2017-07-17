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

  combo(selectEvent: Event, inputElem: HTMLInputElement): void {
    inputElem.value = (selectEvent.target as HTMLSelectElement).value;
  }

  filterOpts(term: string) {
    this.datalist = this.opts.filter(opt => opt.includes(term) && term !== '');
  }
}
