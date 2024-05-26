import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HotSongsListComponent } from './hot-songs-list.component';

describe('HotSongsListComponent', () => {
  let component: HotSongsListComponent;
  let fixture: ComponentFixture<HotSongsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotSongsListComponent, RouterModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotSongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
