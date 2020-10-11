import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { IconName, TSH_ICONS_COLLECTION } from './tsh-icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tsh-icon[icon]',
  template: ``
})
export class TshIconComponent implements OnInit {
    @Input() icon!: IconName;
    @Input() color?: string | undefined;

    constructor(private readonly el: ElementRef) {}

    public ngOnInit(): void {
        this.el.nativeElement.innerHTML = TSH_ICONS_COLLECTION.get(this.icon);
        if (this.color) {
          (this.el.nativeElement.querySelector('svg') as SVGElement).classList.add(`text-${this.color}`);
        }
    }
  }
