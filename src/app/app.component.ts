import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private created_at: Date = new Date();
    constructor() {
    }

    posts = [
        {
            title: 'Mon premier article',
            content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
            loveIts: 5,
            created_at: this.created_at
        },
        {
            title: 'Mon deuxième article',
            content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
            loveIts: -5,
            created_at: this.created_at
        },
        {
            title: 'Mon troisième article',
            content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
            loveIts: 0,
            created_at: this.created_at
        }
    ];

}
