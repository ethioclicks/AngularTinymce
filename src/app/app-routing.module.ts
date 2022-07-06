import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostingComponent } from './components/create-posting/create-posting.component';
import { ReadPostComponent } from './components/read-post/read-post.component';

const routes: Routes = [
  {path:"", redirectTo:"/",pathMatch:"full"},
  {path:"Create",component:CreatePostingComponent},
  {path:"Read", component:ReadPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
