import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListWithFilterComponent } from './song-list-with-filter.component';

describe('SongListWithFilterComponent', () => {
  let component: SongListWithFilterComponent;
  let fixture: ComponentFixture<SongListWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongListWithFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongListWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
