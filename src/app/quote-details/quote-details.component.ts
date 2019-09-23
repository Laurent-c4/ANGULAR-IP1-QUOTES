import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() isLike = new EventEmitter<boolean>();
  @Output() isDislike = new EventEmitter<boolean>();

  quoteDelete(remove:boolean){
    this.isDelete.emit(remove);
  }
  quoteUpVote(like:boolean){
    this.isLike.emit(like);
  }
  quoteDownVote(dislike:boolean){
    this.isDislike.emit(dislike);
  }

  constructor() { }

  ngOnInit() {
  }

}
