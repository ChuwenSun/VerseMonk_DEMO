import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../services/song.service';
import { AnnotationService} from '../annotation.service';
import { Song, SongClass } from '../services/song.model';
import { Annotation, AnnotationClass } from '../services/annotation.model';
import { AnnotationComponent } from '../annotation/annotation.component';
import { SafeHtmlPipe } from '../pipes/safe-html/safe-html.pipe';
@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail-page.component.html',
  styleUrls: ['./song-detail-page.component.css']
})
export class SongDetailPageComponent implements OnInit {

  song: Song = new SongClass();
  annotations: Annotation[] = [];
  formattedLyrics: string = "";
  selectedAnnotation: Annotation = new AnnotationClass();
  isAnnotationVisible: boolean = false;

  selectedText: string = '';
  isAddingAnnotation: boolean = false;
  startIndex: number = 0;
  endIndex: number = 0;

  @ViewChild('annotateButton') annotateButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('annotateInputWindow') annotateInputWindow!: ElementRef<HTMLDivElement>;
  @ViewChild('annotationTextarea') annotationTextarea!: ElementRef<HTMLTextAreaElement>;
  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private annotationService: AnnotationService,
    private elementRef:ElementRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadSongAndAnnotations(id);
    }else {
      console.error('Song ID is null');
    }

    //   this.songService.getSongById(id).subscribe(data => {

    //     this.song = data;
    //     console.log("title?" + this.song.title);
    //     console.log("lyrics?" + this.song.lyrics);
      
    //   });

    //   this.loadAnnotations(id);
    // } else {
    //   console.error('Song ID is null');
    // }
    
  }

  onMouseUp(): void {

    const selection = window.getSelection();
    console.log("selection: " + selection);
    if (selection && selection.toString().length > 0) {
      this.selectedText = this.removeNewlines(selection.toString());
      // this.selectedText = selection.toString();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      //Position the annotate button
      const button = this.annotateButton.nativeElement;
      const annotationDiv = this.annotateInputWindow.nativeElement;
      const divWidth = annotationDiv.offsetWidth;
      const windowWidth = window.innerWidth;

      button.classList.remove('hidden');
      button.style.left = `${rect.left + scrollLeft}px`;
      button.style.top = `${rect.bottom + scrollTop}px`;
      annotationDiv.style.left = "50rem";
      annotationDiv.style.top = `${rect.bottom + scrollTop}px`;

      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(this.elementRef.nativeElement.querySelector('.lyrics-container'));
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      this.startIndex = preSelectionRange.toString().length;
      this.endIndex = this.startIndex + this.selectedText.length;
      console.log("range: " + range);
      console.log("preSelectionRange: " + preSelectionRange);
      console.log("startIndex: " + this.startIndex);
      console.log("endIndex: " + this.endIndex);
      // this.showAddAnnotationButton(event);
    }else{
      this.isAddingAnnotation = false;
      this.annotateButton.nativeElement.classList.add('hidden');
      this.annotateInputWindow.nativeElement.classList.add('hidden');
    
    }
    
  }

  removeNewlines(text: string): string {
    return text.replace(/\n/g, '');
  }
  hideAnnotateInputWindow() {
    this.annotateInputWindow.nativeElement.classList.add('hidden');
    }

  // onMouseUp(event: MouseEvent): void {
  //   const selection = window.getSelection();

  // }
  // showAddAnnotationButton(event: MouseEvent): void {
  //   // Display the button near the highlighted text
  //   const addButton = this.elementRef.nativeElement.querySelector('#add-annotation-button');
  //   addButton.style.top = `${event.pageY}px`;
  //   addButton.style.left = `${event.pageX}px`;
  //   addButton.classList.remove('hidden');
  // }

  showAddAnnotationWindow(): void {
    const inputWindow = this.annotateInputWindow.nativeElement;
    inputWindow.classList.remove('hidden');
  }

  saveAnnotation(): void {
    const annotationText = this.annotationTextarea.nativeElement.value;
    const newAnnotation: Annotation = {
      text: annotationText,
      songId: this.song.id, 
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      createdAt: new Date(Date.now()),
      createdBy: "User_Unknown"
    };

    this.annotationService.addAnnotation(newAnnotation).subscribe(
      response => {
        console.log('Annotation saved:', response);
        this.annotateInputWindow.nativeElement.classList.add('hidden');
      },
      error => {
        console.error('Error saving annotation:', error);
      }
    );
  }

  // hideAddAnnotationButton(): void {
  //   const addButton = this.elementRef.nativeElement.querySelector('#add-annotation-button');
  //   addButton.classList.add('hidden');
  // }

  // submitAnnotation(annotationText: string): void {
  //   const newAnnotation: Partial<Annotation> = {
  //     text: annotationText,
  //     songId: this.song.id,
  //     startIndex: this.startIndex,
  //     endIndex: this.endIndex,
  //     createdAt: new Date(Date.now()),
  //   };
  //   _id?: string;
  // songId: string;
  // startIndex: number;
  // endIndex: number;
  // text: string;
  // createdBy: string;
  // createdAt?: Date;
  //   this.annotationService.addAnnotation(newAnnotation as Annotation).subscribe(() => {
  //     this.loadAnnotations(this.song.id);
  //     this.isAddingAnnotation = false;
  //     this.selectedText = '';
  //     this.startIndex = 0;
  //     this.endIndex = 0;
  //   });
  // }

  loadSongAndAnnotations(id: string): void {
    console.log("console working");
    const storedSong = sessionStorage.getItem(`song-${id}`);
    const storedAnnotations = sessionStorage.getItem(`annotations-${id}`);
  
    if (storedSong && storedAnnotations) {
      this.song = JSON.parse(storedSong);
      this.annotations = JSON.parse(storedAnnotations);
      this.formattedLyrics = this.formatLyricsWithAnnotations(this.song.lyrics, this.annotations);
    } else {
      this.songService.getSongById(id).subscribe(data => {
        this.song = data;
        sessionStorage.setItem(`song-${id}`, JSON.stringify(this.song));
        this.loadAnnotations(id);
      });
    }
  }
  

  loadAnnotations(id: string): void {
    this.annotationService.getAnnotations(id).subscribe((annotations) => {
      this.annotations = annotations;
      sessionStorage.setItem(`annotations-${id}`, JSON.stringify(this.annotations));
      this.formattedLyrics = this.formatLyricsWithAnnotations(this.song.lyrics, this.annotations);
    });
  }
  

  formatLyricsWithAnnotations(lyrics: string, annotations: Annotation[]): string {
    let offset = 0;
    annotations.forEach(annotation => {
      const startTag = `<span data-annotation-id="${annotation._id}" class="annotation-span bg-gray-300 cursor-pointer text-white p-1 rounded" ">`;
      const endTag = '</span>';
      lyrics = lyrics.slice(0, annotation.startIndex + offset) + startTag + 
               lyrics.slice(annotation.startIndex + offset, annotation.endIndex + offset) + 
               endTag + lyrics.slice(annotation.endIndex + offset);
      offset += startTag.length + endTag.length;
    });
    return lyrics;
  }

  showAnnotation(event: Event): void {
    
    const span = event.target as HTMLElement;
    const annotationId = span.getAttribute('data-annotation-id');
    console.log("Show Annotation clicked, id: " + annotationId);
    if (annotationId) {
      this.selectedAnnotation = this.annotations.find(annotation => annotation._id === annotationId) || new AnnotationClass();
      // const annotationDiv = this.elementRef.nativeElement.querySelector('#annotation-div');
      // if (annotationDiv){
      //   annotationDiv.classList.remove('hidden');
      // }
      this.isAnnotationVisible = true;
      // Logic to display the annotation details
    }
    // this.selectedAnnotation = this.annotations.find(annotation => annotation._id === id) || new AnnotationClass();
  }

  closeAnnotation(): void {
    this.selectedAnnotation = new AnnotationClass();
  }

  testClick(): void {
    console.log("clicked");
  }

  hideAnnotation(): void {
    this.isAnnotationVisible = false;
  }

  ngAfterViewInit(): void {
    const timeoutMs = 3000;
    setTimeout(() => {
      const annotationSpans = this.elementRef.nativeElement.querySelectorAll('.annotation-span');
      console.log("In ngAfterViewInit");
      annotationSpans.forEach((span: HTMLElement) => {
        console.log("annotationSpan adding: " + span.textContent);
        span.addEventListener('click', this.showAnnotation.bind(this));
      });
      console.log("Finished. Can click now!");
  }, timeoutMs);
    console.log("timeoutMS: " + timeoutMs);



    // console.log("In ngAfterViewInit");
    // this.annotations.forEach(annotation => {
    //   const annotationSpan = this.elementRef.nativeElement.querySelector(`#annotation-${annotation._id}`);

    // });


  }
}