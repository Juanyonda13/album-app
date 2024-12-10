import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateAlbumComponent } from './features/create-album/create-album.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CreateAlbumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'album-app';
}
