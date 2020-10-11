import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'tsh-button[label]',
    template: `
       <button (click)="onClick($event)" class="btn btn-{{ type }} w-100" [disabled]="disabled">{{ label }}</button>
    `,
    styles: [
        `
        button {
            height: 48px;
            min-width: 100px;
        }

        .btn-white {
            border: 1px solid #4460F7;
            color: #4460F7;
        }
        `
    ]
  })
  export class TshButtonComponent {
    @Input() label = '';
    @Input() type = 'primary';
    @Input() disabled = false;
    @Output() handleClick: EventEmitter<Event> = new EventEmitter();

    public onClick(event: Event): void {
        this.handleClick.emit(event);
    }
  }
