
import {Component, OnChanges} from "@angular/core";

@Component({
    selector: 'kamino',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})


export class starComponent implements OnChanges{

    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.starWidth * 86 / 5;
    }
}