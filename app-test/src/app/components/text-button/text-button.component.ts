import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent {
  @Input('label') public buttonLabel: string = '';
  @Output() public actionClicked = new EventEmitter();
  public value: string = '';

  public buttonClicked() {
    this.actionClicked.emit(this.value);
  }
}
