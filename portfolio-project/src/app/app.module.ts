import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WebDesignProjectsComponent } from './web-design-projects/web-design-projects.component';
import { GraphicDesignProjectsComponent } from './graphic-design-projects/graphic-design-projects.component';
import { HomeComponent } from './home/home.component';

import { GithubInfoService } from './about-me/github-info.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WebDesignProjectsComponent,
    GraphicDesignProjectsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
