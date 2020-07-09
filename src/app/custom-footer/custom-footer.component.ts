import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss']
})
export class CustomFooterComponent implements OnInit {

  @Input() footerSubpageNames: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
