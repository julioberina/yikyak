import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [PostsComponent, CommentsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PostsModule { }
