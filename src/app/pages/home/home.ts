import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { GetPosts } from '../../Posts/get-posts';
import { Observable } from 'rxjs';


interface Post{
  id: number
  title: string
  body: string
  userId: number
}

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  postId = signal<number>(1) // Cambiamos a signal normal con valor inicial
  post$!: Observable<Post>

  private postService = inject(GetPosts)

  constructor(){
    effect(()=>{
      this.post$ = this.postService.getPostById(this.postId())
    })
  }

  onPostIdChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    if (!isNaN(value) && value > 0) {
      this.postId.set(value);
    }
  }
}
