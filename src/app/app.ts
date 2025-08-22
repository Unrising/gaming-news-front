import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { NewsList } from './features/news/news-list/news-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NewsList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
