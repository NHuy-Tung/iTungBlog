import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPostRequest } from '../models/add-post.model';
import { Post } from '../models/post.model';
import { UpdatePostRequest } from '../models/update-post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  apiBaseUrl = environment.apiBaseUrl;
  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiBaseUrl + '/api/posts');
  }

  getPostById(id: string):Observable<Post> {
    return this.http.get<Post>(this.apiBaseUrl + '/api/posts/' + id);
  }

  updatePost(id: string | undefined, updatePostRequest : UpdatePostRequest):Observable<Post> {
    return this.http.put<Post>(this.apiBaseUrl + '/api/posts/' + id, updatePostRequest);
  }

  addPost(addPostRequest: AddPostRequest): Observable<Post> {
    return this.http.post<Post>(this.apiBaseUrl + '/api/posts',addPostRequest);
  }

  deletePost(id: string | undefined):Observable<Post> {
    return this.http.delete<Post>(this.apiBaseUrl + '/api/posts/' + id);
  }
}
