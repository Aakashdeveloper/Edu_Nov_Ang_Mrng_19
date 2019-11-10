import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';


@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailsComponent implements OnInit {
    id;
    details: IProduct[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.productService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this.router.navigate(['/product']);
    }

}

/*
name;
    image;
    description;
this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.image = data['Img'];
                this.description = data['desc']
            });
*/
