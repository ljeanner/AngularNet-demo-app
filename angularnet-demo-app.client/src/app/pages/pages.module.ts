import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    TableModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
