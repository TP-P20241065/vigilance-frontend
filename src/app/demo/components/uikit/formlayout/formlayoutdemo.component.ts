import { Component } from '@angular/core';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { unitId: '0', code: '0' },
        { unitId: '1', code: '1' },
        { unitId: '2', code: '2' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;
    valCheck: any[] = [];

}
