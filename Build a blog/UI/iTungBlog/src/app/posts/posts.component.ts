import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService : PostService) { }
  posts :Post[] = []
  ngOnInit(): void {
    this.postService.getAllPost()
    .subscribe(
      response => {
        this.posts = response;
      }
    )
  }

}
