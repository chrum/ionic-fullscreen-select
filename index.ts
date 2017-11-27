import {NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';

import {FullScreenSelectComponent} from './src/ion-fullscreen-select';
import {FullScreenSelectPage} from './src/ion-fullscreen-select-page';


@NgModule({
    declarations: [
        FullScreenSelectPage,
        FullScreenSelectComponent
    ],
    entryComponents: [
        FullScreenSelectPage
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        FullScreenSelectComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FullScreenSelectModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: FullScreenSelectModule, providers: []};
    }
}
