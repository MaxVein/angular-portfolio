import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GithubInfoService } from "./github-info.service"
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers:[GithubInfoService],
})
export class AboutMeComponent implements OnInit {
  info: GithubInfoService;
  constructor(private infoservice: GithubInfoService) { }
  ngOnInit(): void {
    this.infoservice.getData().subscribe((infoParsed:GithubInfoService)=> this.info = infoParsed)
  }
}
