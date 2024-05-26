import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListFilterComponent } from './song-list-filter.component';

describe('SongListFilterComponent', () => {
  let component: SongListFilterComponent;
  let fixture: ComponentFixture<SongListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongListFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
