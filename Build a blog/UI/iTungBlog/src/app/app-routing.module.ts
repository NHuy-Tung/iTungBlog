import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'admin/posts',
    component: AdminPostsComponent
  },
  {
    path: 'admin/posts/add',
    component: AdminAddPostComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminViewPostComponent
  },
  {
    path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
