import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Post{
  id: number
  title: string
  body: string
  userId: number
}

@Injectable({
  providedIn: 'root'
})
export class GetPosts {

  private http = inject(HttpClient)

  getPostById(id: number): Observable<Post>{
    const data = this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    return data
  }
}
