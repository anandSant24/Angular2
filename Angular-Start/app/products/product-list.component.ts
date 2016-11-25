import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    selector:'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit{
    showImage: boolean = false;
    pageTitle: string = 'Anand Kumar Sant';
    /* IProduct is an Interface from TypeScript for Good practice as they can't be transpiled into JS */
    products: IProduct[];
    imageWidth: number = 50;
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    listFilter: string;

    onNotify(message: string):void{
        this.pageTitle = `product List`+message;
    }

    constructor(private _productService: ProductService){ }

    ngOnInit(): void{
     this.products = this._productService.getProducts();   
    }

}