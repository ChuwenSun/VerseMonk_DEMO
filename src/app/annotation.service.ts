import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Annotation } from './services/annotation.model';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {
  private apiUrl = environment.apiUrl + "/annotations";
  constructor(private http: HttpClient) { }

  getAnnotations(songId: string): Observable<Annotation[]> {
    return this.http.get<Annotation[]>(`${this.apiUrl}/${songId}`);
  }

  addAnnotation(annotation: Annotation): Observable<Annotation> {
    return this.http.post<Annotation>(this.apiUrl + '/', annotation);
  }

  updateAnnotation(id: string, annotation: Partial<Annotation>): Observable<Annotation> {
    return this.http.put<Annotation>(`${this.apiUrl}/${id}`, annotation);
  }

  deleteAnnotation(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}


