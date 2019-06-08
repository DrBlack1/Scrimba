import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerListComponet } from './customers-list/customer-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
    { path: 'customers', component: CustomersComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {}