import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconName } from '../tsh-icon/tsh-icons';

@Component({
    selector: 'tsh-input',
    host: {class: 'position-relative d-block'},
    template: `
      <input
        [type]="type"
        class="w-100 rounded px-3 border border-gray"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        (keyup)="handleKeyboardPress($event)"
        [class.pr-5]="suffixIcon"
        [placeholder]="placeholder">
      <ng-container *ngIf="suffixIcon">
        <tsh-icon class="position-absolute pointer" (click)="handleIconClick()"  [icon]="suffixIcon.name" [color]="suffixIcon.color"></tsh-icon>
      </ng-container>
    `,
    styles: [`
      tsh-icon {
        top: 12px;
        right: 20px;
      }

      input {
            height: 48px;
        }
    `]
  })
  export class TshInputComponent {
    @Input() value: string | null = '';
    @Input() placeholder = '';
    @Input() type: 'password' | 'text' = 'text';
    @Input() suffixIcon?: {name: IconName, color?: string};

    @Output() iconClick = new EventEmitter();
    @Output() valueChange = new EventEmitter<string>();
    @Output() enterKeyPress = new EventEmitter();

    handleIconClick(): void {
      this.iconClick.emit();
    }

    handleKeyboardPress({code}: KeyboardEvent): void {
      if(code === 'Enter') {
        this.enterKeyPress.emit();
      }
    }
  }
