import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { Comment } from '../models/comment.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public post: Post;
  public comments: Comment[];

  constructor(private route: ActivatedRoute,
              private router: Location,
              private postsService: PostsService) { 
    this.getPostComments();
  }

  ngOnInit(): void {
  }

  public addComment(): void {
    const comment = { 
      body: (<HTMLInputElement>document.getElementById('comment-content')).value,
      post: this.post
    }

    this.postsService.addComment(comment).subscribe(comment => {
      this.comments.push(comment);
    });

    (<HTMLInputElement>document.getElementById('comment-content')).value = '';
  }

  public goBack(): void {
    this.router.back();
  }

  private getPostComments(): void {
    const post_id = Number(this.route.snapshot.paramMap.get('id'));

    this.postsService.getPost(post_id).subscribe(post => {
      this.post = post;
      this.comments = post.comments;
    });
  }
}
