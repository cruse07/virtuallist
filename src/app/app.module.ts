import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VirtualListModule } from 'angular-virtual-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtuallistComponent } from './virtuallist/virtuallist.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtuallistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VirtualListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
