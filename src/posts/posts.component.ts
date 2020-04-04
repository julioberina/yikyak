import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[]

  constructor() { 
    this.getPosts();
  }

  ngOnInit(): void {
  }

  public addPost(): void {
    const post: Post = { 
      id: this.posts.length + 1, 
      body: (<HTMLInputElement>document.getElementById('post-content')).value
    }

    this.posts.push(post);
    localStorage.setItem('posts', JSON.stringify(this.posts));

    (<HTMLInputElement>document.getElementById('post-content')).value = '';
  }
 
  private getPosts(): void {
    if (localStorage.getItem('posts')) {
      this.posts = JSON.parse(localStorage.getItem('posts'));
    } else {
      this.posts = [
        { id: 1, body: 'This is post 1' },
        { id: 2, body: 'Post 2 here' },
        { id: 3, body: 'Finally post 3' },
      ]

      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
}
