import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-list',
  imports: [CommonModule],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css'
})
export class NewsList {
  news = [
    {id: 1, title: "Zelda DLC"},
    {id: 2, title: "Patch 1.0.1 Elden Ring"},
    {id: 3, title: "Indie fest: 10 new games"}
  ]

  selected?:{id:number;title:string};

  select(n:{id:number;title:string}){
    this.selected = n;
  }

}
