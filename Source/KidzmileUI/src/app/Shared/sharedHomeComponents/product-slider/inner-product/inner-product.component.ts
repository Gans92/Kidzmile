import { environment } from './../../../../../environments/environment';
import { Product } from '../../../../Model/ProductModel/product.model';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  styleUrls: ['./inner-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnerIproductComponent implements OnInit {
  @Input() product: Product;
  @Input() showRating: boolean;
  noImageUrl = 'assets/default/no-image-available.jpg';
  constructor() {
  }

  ngOnInit() {
  }
  get imageUrl() {
    return this.product.imageUrl ? this.product.imageUrl : this.noImageUrl;
  }
}
