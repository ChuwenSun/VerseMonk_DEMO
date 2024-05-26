import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AnnotationService } from '../annotation.service';
import { Annotation, AnnotationClass } from '../services/annotation.model';
@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrl: './annotation.component.css'
})
export class AnnotationComponent {
  @Input() annotation: Annotation = new AnnotationClass();
  @Output() closeAnnotation = new EventEmitter<void>();
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.annotation) {
    //   console.log('Annotation changed:', changes.annotation.currentValue);
    //   // You can add any additional logic needed when the annotation changes
    // }
  }

  close(): void {
    this.closeAnnotation.emit();
  }
}
