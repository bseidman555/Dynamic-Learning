import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  
  posts: any ;
  responseObj: any;
  constructor( private service: PostService) { }
 
  getPosts(){
  this.service.getPosts()
  .subscribe(response =>{
    console.log(response);
    this.posts = response;
  })
 }

    
    createPosts(input: HTMLInputElement ) {
      let post={title: input.value}
      input.value = '';
      this.service.createPosts(post)
      .subscribe(response=>{
        this.responseObj = response;
        this.posts.splice(0,0, post)
        console.log("yayyyy id" , this.responseObj.id);
        console.log(response)
        

      })
    }

    updatePosts(post){
      
      this.service.updatePosts(post)
      .subscribe(response =>{
        this.responseObj = response;
        console.log(response);

      })

    }

    deletePosts(post){
    this.service.deletePosts(post.id)
    .subscribe(response => {
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1);
    });

    }
    ngOnInit() {

    }

}
