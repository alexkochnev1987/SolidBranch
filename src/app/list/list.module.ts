import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { User } from '../constants';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
