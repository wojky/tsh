import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {class: 'd-block'},
  selector: 'tsh-rating-box[rating]',
  template: `
  <tsh-icon *ngFor="let iconType of ratingStars; let last = last" [class.pr-2]="!last" [color]="color" [icon]="iconType"></tsh-icon>
  `
})
export class TshRatingBoxComponent implements OnInit {
    @Input() rating = 0;
    @Input() max = 5;
    @Input() color = 'warning';

    public ratingStars = new Array(this.max).fill('empty-star');

    public ngOnInit(): void {
        const isHalfStar = this.rating % Math.floor(this.rating) !== 0;
        this.ratingStars = this.ratingStars.map((star, index) => {
          if (index > this.rating ) {
            return isHalfStar && this.ratingStars[index - 1] === 'full-star'
            ?  'half-star'
            : star;
          } else {
            return 'full-star';
          }
        });
    }
  }
