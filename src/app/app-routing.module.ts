import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtuallistComponent } from './virtuallist/virtuallist.component';


 
const routes: Routes = [
   { path: '', redirectTo: '/virtuallist', pathMatch: 'full' },
  {path: 'virtuallist', component: VirtuallistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
