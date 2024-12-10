import { Routes } from '@angular/router';
import { ListAlbumsComponent } from './features/list-albums/list-albums.component';
import { CreateAlbumComponent } from './features/create-album/create-album.component';
import { AlbumDetailComponent } from './features/album-detail/album-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: ListAlbumsComponent },
    { path: 'albums/create', component: CreateAlbumComponent },
    { path: 'albums/:id', component: AlbumDetailComponent },
];
