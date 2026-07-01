import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WordPressPost } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class WordpressNewsService {
  readonly apiUrl = 'https://wptavern.com/wp-json/wp/v2/posts?per_page=3';

  constructor(private http: HttpClient) {}

  getLatestPosts() {
    return this.http.get<WordPressPost[]>(this.apiUrl);
  }
}
