// annotation.model.ts
export interface Annotation {
  _id?: string;
  songId: string;
  startIndex: number;
  endIndex: number;
  text: string;
  createdBy: string;
  createdAt?: Date;
}
  
  export class AnnotationClass implements Annotation {
    _id?: string;
    songId: string;
    startIndex: number;
    endIndex: number;
    text: string;
    createdBy: string;
    createdAt?: Date;
  
    constructor(
        _id: string = '',
        songId: string = '',
      startIndex: number = 0,
      endIndex: number = 0,
      text: string = '',
      createdBy: string = '',
      createdAt: Date = new Date(),
    ) {
      this._id = _id;
      this.songId = songId;
      this.startIndex = startIndex;
      this.endIndex = endIndex;
      this.text = text;
      this.createdBy = createdBy;
      this.createdAt = createdAt;
    }
  }
  