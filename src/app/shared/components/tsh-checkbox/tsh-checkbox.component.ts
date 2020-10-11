import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'tsh-checkbox[label]',
    template: `
        <label class="d-flex align-items-center m-0">
            <div
                (click)="toggle()"
                class="d-flex justify-content-center align-items-center text-light border border-gray"
                [class.bg-primary]="checked"
                [class.pointer]="!disabled">{{ checked ? '&#10003;' : ''}}
            </div>
            <span class="pl-2">{{ label }}</span>
        </label>
    `,
    styles: [
        `
            div {
                width: 24px;
                height: 24px;
                border-radius: 4px;
                color: white;
            }
        `
    ]
  })
  export class TshCheckboxComponent {
    @Input() checked: boolean | null = false;
    @Input() disabled = false;
    @Input() label = '';

    @Output() checkChange = new EventEmitter<boolean | null>();

    public toggle(): void {
        this.checked = !this.checked;

        this.checkChange.emit(this.checked || null);
    }
  }
