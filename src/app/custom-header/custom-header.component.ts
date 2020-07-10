import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

  @Input('passedPageNames') headerSubpageNames: string[];
  @Output() outputVariable: EventEmitter<string>;

  constructor() { 
    this.outputVariable = new EventEmitter();
  }

  usePageName(page: string) {
    this.outputVariable.emit(page);
  }

  ngOnInit(): void {
  }

}
