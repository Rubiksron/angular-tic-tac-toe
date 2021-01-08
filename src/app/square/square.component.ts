import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button> {{ value }} </button>
  `,
  styleUrls: ['./square.component.scss']
})

export class SquareComponent {
  @Input()
  value: 'X' | 'O' = "X";
}
