import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[]

  constructor(private router: Router) { 
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
    sessionStorage.setItem('posts', JSON.stringify(this.posts));

    (<HTMLInputElement>document.getElementById('post-content')).value = '';
  }

  public viewPost(id: number) {
    this.router.navigate(['/posts', id]);
  }
 
  private getPosts(): void {
    this.posts = JSON.parse(sessionStorage.getItem('posts') || '[]');
  }
}
