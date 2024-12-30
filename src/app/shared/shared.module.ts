import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomlabelDirective } from './directives/customlabel.directive';

@NgModule({
  declarations: [CustomlabelDirective],
  imports: [CommonModule],
  exports: [CustomlabelDirective],
})
export class SharedModule {}
