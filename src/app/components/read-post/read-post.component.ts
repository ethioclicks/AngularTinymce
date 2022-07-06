import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  Posts:any [] =[];
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(){
    this.getPost().subscribe(data => {
      this.Posts = [];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.id);
        this.Posts.push({
          id: element.payload.doc.id,
          ... element.payload.doc.data()
        })
      });
    })
  }
  getPost():Observable<any> {
    return this.firestore.collection('Tinymce').snapshotChanges();
  }
}
