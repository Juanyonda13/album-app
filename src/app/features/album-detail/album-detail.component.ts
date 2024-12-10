import { Component, Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumCommentsComponent } from '../album-comments/album-comments.component';
import { AlbumService } from '../../services/album.service';
import { ChevronLeft, LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, AlbumCommentsComponent,RouterModule,LucideAngularModule],
  templateUrl: './album-detail.component.html',
  styleUrls: [],
})
export class AlbumDetailComponent implements OnInit  {
  @Input() albumId: number | null = null;
  album: any = null;
  readonly chevronIcon = ChevronLeft;
  constructor(private activatedRoute: ActivatedRoute,private albumService: AlbumService) {}

  ngOnInit() {
    this.albumId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.albumId) {
      this.loadAlbumDetails();
    }
  }

  loadAlbumDetails() {
    if (!this.albumId) {
      return;
    }

    this.albumService.getAlbumById(this.albumId).subscribe((data) => {
      this.album = data;
    });
  }
}
