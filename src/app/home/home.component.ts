import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GlobalArticle } from '../models/global-article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: GlobalArticle;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllLatestArticle()
      .subscribe(data => {
        this.articles = data;
        console.log(this.articles);
      });
  }

}
