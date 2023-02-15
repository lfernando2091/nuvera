import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "d",
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: "", redirectTo: "d", pathMatch: 'full' },
  { path: "**", redirectTo: "d" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
