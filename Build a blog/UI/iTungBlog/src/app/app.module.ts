import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { FormsModule } from '@angular/forms';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostsComponent,
    AdminViewPostComponent,
    AdminAddPostComponent,
    PostsComponent,
    PostComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
