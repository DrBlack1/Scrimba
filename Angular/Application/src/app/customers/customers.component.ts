import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

    people: ICustomer[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => this.people = customers);
    }
}