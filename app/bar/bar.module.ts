import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './bar.component';

const appRoutes: Routes = [
  { path: 'bar', component: BarComponent }
];

export function barServiceFactory(i: any) {
  return i.get('barService');
}

const barServiceProvider = {
  provide: 'barService', 
  useFactory: barServiceFactory, 
  deps: ['$injector']
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UpgradeModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [  
    barServiceProvider    
  ],
  declarations: [ BarComponent ],
  bootstrap: []    
})
export class BarModule { }