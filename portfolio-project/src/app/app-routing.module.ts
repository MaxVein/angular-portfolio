import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WebDesignProjectsComponent } from './web-design-projects/web-design-projects.component';
import { GraphicDesignProjectsComponent } from './graphic-design-projects/graphic-design-projects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'webdesignprojects', component: WebDesignProjectsComponent },
  { path: 'graphicdesignprojects', component: GraphicDesignProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
