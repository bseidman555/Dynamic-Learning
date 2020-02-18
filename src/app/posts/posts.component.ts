import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'
  
  posts: any ;
  responseObj: any;
  constructor( private http: HttpClient) { }
    
    getPosts(){
      this.http.get(this.ROOT_URL + '/posts')
      .subscribe(response =>{
        console.log(response);
        this.posts = response;
      });
    }
    createPosts(input: HTMLInputElement ) {
      let post={title: input.value}
      input.value = '';
      this.http.post(this.ROOT_URL + '/posts', JSON.stringify(post))
      .subscribe(response=>{
        this.responseObj = response;
        this.posts.splice(0,0, post)
        console.log("yayyyy id" , this.responseObj.id);
        console.log(response)
        

      })
    }

    updatePosts(post){
      
      this.http.put(this.ROOT_URL + '/posts/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response =>{
        this.responseObj = response;
        console.log(response);

      })
      //this.http.put(this.ROOT_URL, JSON.stringify({post}))

    }
    ngOnInit() {
    
    }
  }
  
