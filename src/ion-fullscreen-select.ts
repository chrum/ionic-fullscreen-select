import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FullScreenSelectPage} from './ion-fullscreen-select-page';

@Component({
    selector: 'ion-fullscreen-select',
    template: `
        <div (click)="open()">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        :host {
            display: block;
        }
    `]
})
export class FullScreenSelectComponent {
    @Input() title: string;
    @Input() options: Array<any>;
    @Output() onSelected = new EventEmitter<Object>();

    constructor(
        private _navCtrl: NavController,
        public params: NavParams
    ) {
        this.title = this.params.get('title');
        this.options = this.params.get('items');
    }

    open() {
        this._navCtrl.push(FullScreenSelectPage, {
            title: this.title,
            options: this.options,
            onSelected: (selectedItem) => {
                this.onSelected.emit(selectedItem);
            }
        });
    }
}