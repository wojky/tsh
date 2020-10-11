import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { TshButtonComponent } from './components/tsh-button/tsh-button.component';
import { TshCheckboxComponent } from './components/tsh-checkbox/tsh-checkbox.component';
import { TshIconComponent } from './components/tsh-icon/tsh-icon.component';
import { TshInputComponent } from './components/tsh-input/tsh-input.component';
import { TshPaginationComponent } from './components/tsh-pagination/tsh-pagination.component';
import { TshRatingBoxComponent } from './components/tsh-rating-box/tsh-rating-box.component';

const sharedComponents = [
    TshInputComponent,
    TshButtonComponent,
    TshCheckboxComponent,
    TshIconComponent,
    TshRatingBoxComponent,
    TshPaginationComponent,
];

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    imports: [
        TranslateModule.forChild({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    exports: [TranslateModule, ...sharedComponents],
    providers: [],
})
export class SharedModule { }
