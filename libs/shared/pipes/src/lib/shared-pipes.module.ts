import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './format-date.pipe';


const EXPORTS = [
  FormatDatePipe
];

@NgModule({
  imports: [CommonModule],
  exports: [...EXPORTS],
  declarations: [...EXPORTS]
})

export class SharedPipesModule {}
