import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CountriesModule {}
