import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('data')
  data: any;

  constructor() {}

  ngOnInit() {}
}
