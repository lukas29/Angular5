import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    @Input() rating: number;
    starWidth:number;
    @Output() ratingclicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }
    onClick(){
        this.ratingclicked.emit(`the rating ${this.rating} was clicked!`);
    }
}