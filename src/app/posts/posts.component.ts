import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  posts: any
  constructor( private http: HttpClient) { }
    
    getPosts(){
      this.posts= this.http.get(this.ROOT_URL + '/posts').subscribe(response =>{
        console.log('response');
      });
      console.log(this.posts)
      
    }

    ngOnInit() {
    
    }

  }
  
