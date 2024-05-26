import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailPageComponent } from './song-detail-page.component';

describe('SongDetailPageComponent', () => {
  let component: SongDetailPageComponent;
  let fixture: ComponentFixture<SongDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
