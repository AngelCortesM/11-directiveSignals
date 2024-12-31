import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    // children: [
    //   {
    //     path: 'signals',
    //     loadChildren: () =>
    //       import('./signals.module').then((m) => m.SignalsModule),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
