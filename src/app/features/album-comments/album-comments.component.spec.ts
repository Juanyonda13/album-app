import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCommentsComponent } from './album-comments.component';

describe('AlbumCommentsComponent', () => {
  let component: AlbumCommentsComponent;
  let fixture: ComponentFixture<AlbumCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
