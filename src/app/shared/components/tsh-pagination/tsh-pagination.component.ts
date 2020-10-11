import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {class: 'd-flex justify-content-center align-items-center'},
  selector: 'tsh-pagination[currentPage][pageCount]',
  templateUrl: './tsh-pagination.component.html',

})
export class TshPaginationComponent implements OnChanges {
    @Input() currentPage = 1;
    @Input() pageCount!: number;
    @Output() selectPage = new EventEmitter<number>();

    public paginationPages: Array<number> = [];

    public ngOnChanges(): void {
        this.setPaginationPages();
    }

    public handleSelectPage(page: number): void {
        if (page === this.currentPage) {
            return;
        }
        this.selectPage.emit(page);
      }

    private setPaginationPages(): void {
        if (this.currentPage === 1) {
            this.setPaginationPagesForFirstPage();

            return;
        }

        if (this.currentPage === this.pageCount) {
            this.setPaginationPagesForLastPage();

            return;
        }

        const halfPagesCount = Math.floor(this.pageCount / 2);

        this.paginationPages = this.currentPage < halfPagesCount
            ? [
                this.currentPage - 1,
                this.currentPage,
                this.currentPage + 1,
                this.pageCount - 2,
                this.pageCount - 1,
                this.pageCount
            ]
            : [
                1,
                2,
                3,
                this.currentPage - 1,
                this.currentPage,
                this.currentPage + 1,
            ];
    }

    private setPaginationPagesForFirstPage(): void {
        this.paginationPages = [
            this.currentPage,
            this.currentPage + 1,
            this.currentPage + 2,
            this.pageCount - 2,
            this.pageCount - 1,
            this.pageCount
        ];
    }

    private setPaginationPagesForLastPage(): void {
        this.paginationPages = [
            1,
            2,
            3,
            this.currentPage - 2,
            this.currentPage - 1,
            this.currentPage,
        ];
    }
  }
