import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cards-home',
  templateUrl: './home-cards-home.component.html',
  styleUrls: ['./home-cards-home.component.scss'],
})
export class HomeCardsHomeComponent implements OnInit {
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
