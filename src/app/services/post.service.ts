import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';

  posts: any ;
  responseObj: any;
  constructor(private http: HttpClient) { }
  

    getPosts(){
      return this.http.get(this.ROOT_URL)

      };
    createPosts(post){
      return this.http.post(this.ROOT_URL , JSON.stringify(post))
  
      };  
    updatePosts(post){
        return this.http.put(this.ROOT_URL + post.id, JSON.stringify({isRead: true}))
    
        };
    deletePosts(id){
          return this.http.delete(this.ROOT_URL + '/' + id )
      
          };
    
  

 
}
