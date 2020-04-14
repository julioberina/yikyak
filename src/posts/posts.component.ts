import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.interface';
import { Router } from '@angular/router';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[]

  constructor(private router: Router,
              private postsService: PostsService) { 
    this.getPosts();
  }

  ngOnInit(): void {
  }  

  public addPost(): void {
    const post = { 
      body: (<HTMLInputElement>document.getElementById('post-content')).value
    }

    this.postsService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
    
    (<HTMLInputElement>document.getElementById('post-content')).value = '';
  }

  public viewPost(id: number) {
    this.router.navigate(['/posts', id]);
  }
 
  private getPosts(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts
    });
  }
}
