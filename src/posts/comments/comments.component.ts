import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { Comment } from '../models/comment.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  private commentsArray: Comment[];
  public post: Post;
  public comments: Comment[];

  constructor(private route: ActivatedRoute,
              private router: Location) { 
    this.getPost();
    this.getComments();
  }

  ngOnInit(): void {
  }

  public addComment(): void {
    const comment: Comment = { 
      post_id: this.post.id, 
      body: (<HTMLInputElement>document.getElementById('comment-content')).value
    }

    this.comments.push(comment);
    this.commentsArray.push(comment);
    sessionStorage.setItem('comments', JSON.stringify(this.commentsArray));

    (<HTMLInputElement>document.getElementById('comment-content')).value = '';
  }

  public goBack(): void {
    this.router.back();
  }

  private getPost(): void {
    const posts: Post[] = JSON.parse(sessionStorage.getItem('posts'));
    const post_id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = posts.find(p => p.id === post_id);
  }

  private getComments(): void {
    this.commentsArray = JSON.parse(sessionStorage.getItem('comments') || '[]');
    this.comments = this.commentsArray.filter(c => c.post_id === this.post.id);
  }
}
