import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';
import { TestBed } from '@angular/core/testing';
describe('SafeHtmlPipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it('should create an instance', () => {
    const domSanitizer = TestBed.get(DomSanitizer);
    const pipe = new SafeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
