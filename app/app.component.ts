import { Component } from '@angular/core';
import {ProductListComponent} from './products/product-list.component'
@Component({
  selector: 'my-app',
  template: ` <pm-products></pm-products> `,
  directives: [ProductListComponent] 
})
export class AppComponent {
  title='Tour of Heroes';
  hero='Windstorm'
 }
