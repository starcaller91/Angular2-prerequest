import {Component, Input} from '@angular/core'
import {Table, TablesService} from './tables'
import {OrderItem, OrderItemService} from './OrderItem'


@Component({
    selector: 'orders-management',
    templateUrl: './OrdersManagement.html',
    directives: [Table]
})

export class OrdersManagement {

    tables: Table[];
    orderItems: OrderItem[];

    constructor(private _tablesService: TablesService, private _orderItemService: OrderItemService) {
    }

    ngOnInit() {
        this.tables = this._tablesService.getTables();
        this._orderItemService.getOrderItems().subscribe(oi => this.orderItems = oi);
    }

    //setTables() {
    //    for (var i = 1; i <= this.numberOfTables; i++) {
    //        var t = new Table();
    //        t.tableNumber = i;
    //        this.tables.push(t);
    //    }
    //}


}