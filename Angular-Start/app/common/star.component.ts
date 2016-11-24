import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'product-rating',
    templateUrl: 'app/common/star.component.html',
    styleUrls:['app/common/star.component.css'] 
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    title: 'test';
    starWidth: number;    
    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }
} 

