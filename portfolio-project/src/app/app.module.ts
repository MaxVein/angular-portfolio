import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WebDesignProjectsComponent } from './web-design-projects/web-design-projects.component';
import { GraphicDesignProjectsComponent } from './graphic-design-projects/graphic-design-projects.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutMeComponent, pathMatch:'full'},
    { path: 'webdesignprojects', component: WebDesignProjectsComponent, pathMatch:'full'},
    { path: 'graphicdesignprojects', component: GraphicDesignProjectsComponent, pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WebDesignProjectsComponent,
    GraphicDesignProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
