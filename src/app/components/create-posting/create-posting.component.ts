import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-posting',
  templateUrl: './create-posting.component.html',
  styleUrls: ['./create-posting.component.css']
})
export class CreatePostingComponent implements OnInit {
  postForm !: FormGroup;
  postby!: string;
  
  postForms = new FormGroup({
    title: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required),
  })
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
  }
  SaveData(){
    console.log(this.postForms.value);
      this.addPost(this.postForms.value).then(() => {
        console.log("Post added succesfully");
      }).catch(error =>{
        console.log(error);
      })
  }
  addPost(post: any){
    return this.firestore.collection('Tinymce').add(post);
  }
}
