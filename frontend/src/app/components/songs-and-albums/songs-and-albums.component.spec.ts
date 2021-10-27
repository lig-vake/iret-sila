import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsAndAlbumsComponent } from './songs-and-albums.component';

describe('SongsAndAlbumsComponent', () => {
  let component: SongsAndAlbumsComponent;
  let fixture: ComponentFixture<SongsAndAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsAndAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsAndAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
