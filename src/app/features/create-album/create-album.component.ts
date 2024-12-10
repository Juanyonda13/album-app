import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { AlbumUpdateService } from '../../services/album-update.service';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-album.component.html',
  styleUrls: []
})
export class CreateAlbumComponent {
  albumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private albumUpdateService: AlbumUpdateService
  ) {
    this.albumForm = this.fb.group({
      name: ['', Validators.required],
      cover: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      recordLabel: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.albumForm.valid) {
      this.albumService.createAlbum(this.albumForm.value).subscribe(() => {
        this.albumUpdateService.notifyAlbumCreated();
        this.albumForm.reset();
      });
    }
  }
}
