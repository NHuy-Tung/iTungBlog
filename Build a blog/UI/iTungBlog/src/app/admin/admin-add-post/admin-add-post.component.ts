import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from '../../models/add-post.model';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  post: AddPostRequest = {
    title: '',
    content: '',
    author: '',
    featuredImageUrl: '',
    summary: '',
    publishDate: '',
    updatedDate: '',
    urlHandle: '',
    visible: true,

  }
  ngOnInit(): void {
  }
  onSubmit():void {
    this.postService.addPost(this.post)
    .subscribe(
      response => {
        alert('Success!');
      }
    )
  }

}
