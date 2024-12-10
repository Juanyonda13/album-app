import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://backvynils-q6yc.onrender.com/albums'; 

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAlbum(album: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getComments(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${albumId}/comments`);
  }

  addComment(albumId: number, comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${albumId}/comments`, comment);
  }
}
