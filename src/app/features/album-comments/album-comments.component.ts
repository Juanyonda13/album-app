import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-comments',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './album-comments.component.html',
  styleUrls: [],
})
export class AlbumCommentsComponent implements OnInit {
  @Input() albumId!: number;
  comments: any[] = [];
  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private albumService: AlbumService) {
    this.commentForm = this.fb.group({
      description: ['', Validators.required],
      rating: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.albumService.getComments(this.albumId).subscribe((data) => {
      this.comments = data;
    });
  }

  addComment() {
    if (this.commentForm.valid) {
      const commentData = {
        ...this.commentForm.value,
        collector: { id: 1 },
      };
      this.albumService.addComment(this.albumId, commentData).subscribe(() => {
        this.commentForm.reset({ description: '', rating: 1 });
        this.loadComments();
      });
    }
  }
}
