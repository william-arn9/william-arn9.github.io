import { Component, EventEmitter, OnInit, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Output() selectComponent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('downloadLink', { static: false }) downloadLink!: ElementRef<HTMLAnchorElement>;

  constructor(private renderer: Renderer2, private http: HttpClient) { }

  ngOnInit(): void { }

  click(component: String): void {
    this.selectComponent.emit(component);
  }

  openLink(url: string): void {
    this.renderer.setAttribute(window.open(url, '_blank'), 'noopener', 'true');
  }

  downloadCv(): void {
    const documentUrl = '/assets/documents/William_Arnold_CV.pdf';
    this.http.get(documentUrl, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      this.downloadLink.nativeElement.href = url;
      this.downloadLink.nativeElement.download = 'William_Arnold_CV.pdf';
      this.downloadLink.nativeElement.click();
      URL.revokeObjectURL(url);
    });
  }

}
