import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;

    constructor() {
    }

    ngOnInit() {
    }

    onLoveIt() {
        this.loveIts += 1;
    }

    onDontLoveIt() {
        this.loveIts -= 1;
    }

    getClassLove() {
        if (this.loveIts > 0) {
            return 'list-group-item list-group-item-success';
        } else if (this.loveIts === 0) {
            return 'list-group-item';
        } else {
            return 'list-group-item list-group-item-danger';
        }
    }
}
