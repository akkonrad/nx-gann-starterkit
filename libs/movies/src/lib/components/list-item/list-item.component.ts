import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['/list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  link: string[] = [];

  url: string[] = [];


  ngOnInit() {
    this.url = ['/', ...this.link];
  }
}
