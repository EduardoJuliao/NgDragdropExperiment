import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { AppService } from './app.service.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-dragdrop-experiment';

  constructor(service: AppService) {
    service.getTodos()
      .then(response => {
        this.backlog = response.slice(0,8);
        this.todos = response.slice(9,11);
        this.completed = response.slice(12,14);
      });
  }

  backlog: any[];

  todos: any[];

  completed: any[];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
