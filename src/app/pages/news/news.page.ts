import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { WordPressPost } from '../../interfaces/api.interfaces';
import { WordpressNewsService } from '../../services/wordpress-news.service';

interface CleanPost {
  title: string;
  excerpt: string;
  link: string;
}

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  readonly apiUrl = this.newsService.apiUrl;
  posts: CleanPost[] = [];
  loading = false;
  error = '';

  constructor(private newsService: WordpressNewsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.error = '';
    this.posts = [];
    this.loading = true;
    this.newsService
      .getLatestPosts()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (posts) => {
          this.posts = posts.slice(0, 3).map((post) => this.cleanPost(post));
        },
        error: () => {
          this.error = 'No se pudieron cargar las noticias de WordPress. Intenta más tarde.';
        },
      });
  }

  private cleanPost(post: WordPressPost): CleanPost {
    return {
      title: this.cleanHtml(post.title.rendered),
      excerpt: this.cleanHtml(post.excerpt.rendered),
      link: post.link,
    };
  }

  private cleanHtml(value: string) {
    const withoutTags = value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const textarea = document.createElement('textarea');
    textarea.innerHTML = withoutTags;
    return textarea.value;
  }
}
