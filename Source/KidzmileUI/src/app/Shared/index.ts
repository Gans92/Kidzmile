 import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
 import { RouterModule } from '@angular/router';
 import { CommonModule } from '@angular/common';
 import { NgModule } from '@angular/core';
 import { NguCarouselModule } from '@ngu/carousel';
 import { NgxJsonLdModule } from '@ngx-lite/json-ld';

// // Pipes
// import { KeysPipe } from './pipes/keys.pipe';
// import { HumanizePipe } from '../core/pipes/humanize.pipe';

// // components
// // imports
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { ProductSliderComponent } from './sharedHomeComponents/product-slider/product-slider.component';
 import { InnerIproductComponent } from './sharedHomeComponents/product-slider/inner-product/inner-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // Directives
// import { ZoomableDirective } from './directives/zoomable.directive';
// import { SavedAddressComponent } from './components/saved-address/saved-address.component';
// import { ReversePipe } from '../core/pipes/reverse.pipe';

 @NgModule({
   declarations: [
//     // components
//     // pipes
//     KeysPipe,
//     HumanizePipe,
//     ReversePipe,
//     ZoomableDirective,
      ProductSliderComponent,
      InnerIproductComponent,
//     SavedAddressComponent
   ],
   exports: [
//     // components
//     // modules
//     CommonModule,
//     BsDropdownModule,
//     FormsModule,
//     ReactiveFormsModule,
//     NgxJsonLdModule,
//     // pipes
//     KeysPipe,
//     HumanizePipe,
//     ReversePipe,
//     ZoomableDirective,
     ProductSliderComponent,
//     SavedAddressComponent,
//     NguCarouselModule
  ],
   imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgxInputStarRatingModule,
    NguCarouselModule,
    NgxJsonLdModule
  ]
 })
 export class SharedModule { }
