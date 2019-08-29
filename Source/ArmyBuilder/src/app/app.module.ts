import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ListViewComponent } from './view-container/list-view/list-view.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { AmryDetailViewComponent } from './view-container/amry-detail-view/amry-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    ListViewComponent,
    ViewContainerComponent,
    AmryDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
