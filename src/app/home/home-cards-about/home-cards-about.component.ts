import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home-cards-about',
  templateUrl: './home-cards-about.component.html',
  styleUrls: ['./home-cards-about.component.scss'],
})
export class HomeCardsAboutComponent {
  constructor() {}

  cards = [];

  submitForm(f: NgForm) {
    this.cards.push(f.value);
    f.reset();
  }
}
