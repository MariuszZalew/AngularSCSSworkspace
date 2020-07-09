import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

  @Input('passedPageNames') headerSubpageNames: string[];

  constructor() { }

  usePageName(e) {
    console.log(e);
  }

  ngOnInit(): void {
  }

}
