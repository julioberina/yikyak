import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get('https://localhost:5001/api/Posts');
  }

  public getPost(id: number): Observable<any> {
    return this.http.get(`https://localhost:5001/api/Posts/${id}`);
  }

  public addPost(post: any): Observable<any> {
    return this.http.post('https://localhost:5001/api/Posts', post);
  }

  public getComments(): Observable<any> {
    return this.http.get('https://localhost:5001/api/Comments');
  }

  public getComment(id: number): Observable<any> {
    return this.http.get(`https://localhost:5001/api/Comments/${id}`);
  }

  public addComment(comment: any): Observable<any> {
    return this.http.post('https://localhost:5001/api/Comments', comment);
  }
}
