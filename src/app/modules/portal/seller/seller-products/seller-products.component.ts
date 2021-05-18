import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../../shared/services/Seller/seller.service';
import { ProductService } from '../../../../shared/services/product/product.service';
import { SellerCSVService } from '../../../../seller-csv.service'
import { Router } from '@angular/router';
import { CategoryService } from '../../../../shared/services/category/category.service';
import { from } from 'rxjs';

@Component({
    selector: "app-seller-products",
    templateUrl: "./seller-products.component.html",
    styleUrls: ["./seller-products.component.scss"],
})
export class SellerProductsComponent implements OnInit {
    constructor(
        private sellerService: SellerService,
        private productService: ProductService,
        private sellerCSV: SellerCSVService,
        private router: Router
    ) {
        this.getProducts();
    }

    
    products = [
    ];
    message = null;
    isLoading = 0;




    ngOnInit() { }

    getProducts() {
        this.sellerService.getSellerProducts()
            .subscribe(serverResponse => {
                if (serverResponse) {
                    if (serverResponse.response) {
                        this.products = serverResponse.data.products;
                    } else {
                        console.log(serverResponse.error);
                    }
                } else {
                    console.log('error');
                }
            });
    }

    addProduct() {
        this.router.navigate(["manage/seller/product/add"]);
    }

    editProduct(product: any) {
        this.router.navigate(["manage/seller/product/edit/" + product._id]);
    }
    //(click)="deleteProduct(product)"
    // deleteProduct(product: any) {
    // this.productService.delete(product._id)
    // .subscribe(serverResponse => {
    // if (serverResponse) {
    // if (serverResponse.response) {
    // console.log('deleted');
    // this.products = this.products.filter(prod => prod !== product);
    // this.message = {
    // text: 'Product deleted',
    // type: 'warning'
    // };
    // } else {
    // console.log(serverResponse.error);
    // this.message = {
    // text: 'Error While deleting product',
    // type: 'danger'
    // };
    // }
    // } else {
    // console.log('error');
    // this.message = {
    // text: 'Error While deleting product',
    // type: 'danger'
    // };
    // }
    // });
    // }
    download() {
        this.sellerCSV.downloadFile(this.products, 'jsontocsv');
    }
}