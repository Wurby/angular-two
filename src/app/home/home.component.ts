import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  displayedItem = 0;
  content = [
    "Things aren't quite what they seem",
    'They just change at a whim',
  ];
  ngOnInit() {}

  simpleNextFunction() {
    this.displayedItem++;
  }
  simplePreviousFunction() {
    this.displayedItem--;
  }
}
