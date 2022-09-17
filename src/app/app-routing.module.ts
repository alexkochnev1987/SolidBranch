import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'navigator',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./summary/summary.module').then(m => m.SummaryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
