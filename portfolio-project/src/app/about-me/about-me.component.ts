import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GithubInfoService } from './github-info.service';
import { User } from './User';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [GithubInfoService],
})
export class AboutMeComponent implements OnInit {
  info: User;
  constructor(private infoservice: GithubInfoService) {}
  ngOnInit(): void {
    this.infoservice
      .getData()
      .subscribe((infoParsed: User) => (this.info = infoParsed));
  }
}
