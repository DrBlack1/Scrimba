import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text [(ngModel)]="filter" /> 
    `
})
export class FilterTextboxComponent implements OnInit {

    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInt() {
        
    }
}