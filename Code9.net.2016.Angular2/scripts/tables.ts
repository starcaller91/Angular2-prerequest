import {Component, Input, Injectable} from '@angular/core';

@Component({
    selector: 'restourant-table',
    templateUrl: './RestourantTable.html'
})
export class Table {
    tableNumber: number;
    taken = false;
}


@Injectable()
export class TablesService {
    tables: Table[];
    numberOfTables = 12;


    getTables() {
        if ((!this.tables) || (this.tables.length = 0)) {
            this.tables = new Array();
            for (var i = 1; i <= this.numberOfTables; i++) {
                var t = new Table();
                t.tableNumber = i;
                this.tables.push(t);
            }
        }

        return this.tables;

    }
}