import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { RecordsService } from "./records.service";

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, HttpClientModule ],
    declarations: [ChartsComponent],
    providers: [RecordsService]
})
export class ChartsModule {}
