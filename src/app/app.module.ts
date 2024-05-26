import { BrowserModule } from '@angular/platform-browser';
import { NgModule, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SongDetailPageComponent } from './song-detail-page/song-detail-page.component';
import { HotSongsListComponent } from './hot-songs-list/hot-songs-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SongListFilterComponent } from './song-list-filter/song-list-filter.component';
import { SongListWithFilterComponent } from './song-list-with-filter/song-list-with-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { NumberSuffixPipe } from './pipes/number-suffix/number-suffix.pipe';
import { AnnotationComponent } from './annotation/annotation.component';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SongDetailPageComponent,
    HotSongsListComponent,
    SongListWithFilterComponent,
    SongListFilterComponent,
    FilterDropdownComponent,
    AnnotationComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    NumberSuffixPipe,
    SafeHtmlPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
