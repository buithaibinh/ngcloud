import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Quill from 'quill';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {

  }


  ngAfterViewInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar',
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }

}
