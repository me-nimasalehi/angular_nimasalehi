import { Component } from '@angular/core';
// 3
import {ProductListComponent} from './products/product-list.component'
@Component({
  selector: 'pm-app',
  // 1
  template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    // 2
  directives: [ProductListComponent] 
})
export class AppComponent {
  pageTitle: string='Acme Product Management';
 }
