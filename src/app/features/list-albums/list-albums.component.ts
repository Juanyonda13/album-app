import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlbumDetailComponent } from '../album-detail/album-detail.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { Edit, Eye, LucideAngularModule, LucideIconProvider, Play, Search, Signal, Trash2 } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { AlbumUpdateService } from '../../services/album-update.service';
import { AlbumService } from '../../services/album.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-albums',
  standalone: true,
  templateUrl: './list-albums.component.html',
  imports: [    
    CommonModule,
    AlbumDetailComponent,
    ModalComponent,
    LucideAngularModule,
    RouterModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: [],
})
export class ListAlbumsComponent implements OnInit {
  albums: any[] = [];
  selectedAlbumId: number | null = null;
  isDetailModalVisible = false;
  constructor(private albumService: AlbumService,private albumUpdateService: AlbumUpdateService) {}
  readonly EyeIcon = Eye;
  readonly PlayIcon = Play;
  readonly SearchIcon = Search;
  filteredAlbums: any[] = [];
  searchTerm: string = '';
  ngOnInit() {
    this.loadAlbums();
    this.albumUpdateService.albumCreated$.subscribe(() => {
      this.loadAlbums();
    });
  }

  openDetailModal(albumId: number) {
    this.selectedAlbumId = albumId;
    this.isDetailModalVisible = true;
  }
  closeDetailModal() {
    this.isDetailModalVisible = false;
    this.selectedAlbumId = null;
  }

  showComments(albumId: number) {
    console.log('Comentar álbum:', albumId)
    this.selectedAlbumId = this.selectedAlbumId === albumId ? null : albumId;
  }
  loadAlbums() {
    this.albumService.getAlbums().subscribe((data: any) => {
      this.albums = data;
      this.filteredAlbums = data; // Inicializar la lista filtrada
    });
  }
  filterAlbums() {
    const term = this.searchTerm.toLowerCase();
    this.filteredAlbums = this.albums.filter((album) =>
      album.name.toLowerCase().includes(term)
    );
  }
}
