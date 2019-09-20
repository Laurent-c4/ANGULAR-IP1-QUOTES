import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, "Don't cry because it's over, smile because it happened.",10, 5, "Dr. Seuss", new Date(2019, 8, 22)),
  ];

  constructor() { }

  ngOnInit() {
  }

}