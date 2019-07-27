import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {GlobalArticle} from '../models/global-article';
import {Observable} from 'rxjs';

const BASE_URL = environment.baseUrl;
const API_TOKEN = environment.tokenApi;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getAllLatestArticle() {
    let globalArticleObservable: Observable<GlobalArticle>;
    globalArticleObservable = this.http.get<GlobalArticle>(BASE_URL + 'top-headlines?country=fr&apiKey=' + API_TOKEN);
    return globalArticleObservable;
  }

}


