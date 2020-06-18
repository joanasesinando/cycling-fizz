import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnChanges {

  @Input() status: string;
  @Input() text: string;
  @Input() rightButton: string;
  @Input() leftButton?: string;

  @Output() onRightBtnClicked = new EventEmitter<boolean>();
  @Output() onLeftBtnClicked = new EventEmitter<boolean>();
  @Output() onCloseBtnClicked = new EventEmitter<boolean>();

  headerIcon: string;
  headerTitle: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.setInitialValues(changes.status.currentValue);
  }

  setInitialValues(status) {
    switch (status) {
      case 'danger':
        this.headerIcon = 'flash-outline';
        this.headerTitle = 'Perigo';
        break;

      case 'warning':
        this.headerIcon = 'alert-triangle-outline';
        this.headerTitle = 'Aviso';
        break;

      case 'info':
        this.headerIcon = 'question-mark-outline';
        this.headerTitle = 'Informação';
        break;

      default:
        this.headerIcon = 'close-circle-outline';
        this.headerTitle = 'Title not found';
        break;
    }
  }

  rightBtnClicked() { this.onRightBtnClicked.emit(true); }
  leftBtnClicked() { this.onLeftBtnClicked.emit(true); }
  closeBtnClicked() { this.onCloseBtnClicked.emit(true); }

}
