import { Component } from '@angular/core';

@Component({
  selector: 'mydatalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent {
  title: string = 'app';
  opts: string[] = [ 
    'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten'
  ];
  max: number = 5;

  combo(selectEvent: Event, inputElem: HTMLInputElement): void {
    inputElem.value = (selectEvent.target as HTMLSelectElement).value;
  }
}
