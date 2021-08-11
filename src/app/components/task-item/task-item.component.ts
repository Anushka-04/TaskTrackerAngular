import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() toggleTask: EventEmitter<Task> = new EventEmitter()
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task){
    this.toggleTask.emit(task);
  }

}
