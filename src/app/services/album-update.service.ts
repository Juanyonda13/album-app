import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumUpdateService {
  private albumCreated = new Subject<void>();

  albumCreated$ = this.albumCreated.asObservable();

  notifyAlbumCreated() {
    this.albumCreated.next();
  }
}
