import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'fullscreen-select-page',
    // templateUrl: 'ion-fullscreen-select-page.html'
    template: `
        <ion-header>
            <ion-navbar color="primary">
                <ion-title>
                    Title
                </ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding>
            <ion-list>
                <template ngFor let-option [ngForOf]="options" >
                    <button ion-item (click)="select(option.value)">
                        {{ option.title }}
                    </button>
                </template>
            </ion-list>
        </ion-content>
    `,
})
export class FullScreenSelectPage {
    public title: string;
    public options: Array<any>;
    public onSelected: Function;
    constructor(
        private _navCtrl: NavController,
        public params: NavParams
    ) {
        this.title = this.params.get('title');
        this.options = this.params.get('options');
        this.onSelected = this.params.get('onSelected');
    }

    select(selected) {
        this.onSelected(selected);
        this.close();
    }

    close() {
        this._navCtrl.pop();
    }

}