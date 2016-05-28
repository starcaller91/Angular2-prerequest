import {Component} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {OrdersManagement} from './ordersManagement';
import {TablesService} from './tables'
import 'rxjs/Rx'; 
import {OrderItemService} from './OrderItem'



@Component({
    selector: 'app',
    //templateUrl: './asdf.html',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TablesService, OrderItemService]
})

    @Routes([
        { path: '/', component: OrdersManagement}
    ])
export class App {

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.navigate(['/']);
    }
}