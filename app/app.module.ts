import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy, UrlTree, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BarModule } from './bar/bar.module';

class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  // use only process the `/bar` url
  shouldProcessUrl(url: UrlTree) { 
    return url.toString().startsWith('/bar'); 
  }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([], { initialNavigation: false }),
    BarModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }       
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]    
})
export class AppModule {
  ngDoBootstrap() {}
}