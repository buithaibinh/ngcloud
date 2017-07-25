import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.css']
})
export class CkEditorComponent implements OnInit {

  title = 'Editor Works';
  ckeditorContent;

  constructor() {
    this.ckeditorContent = `<h2>Minas Tirith</h2>
    <p><br></p>
    <p>Pippin looked out from the shelter of Gandalf"s cloak. He wondered if he was awake or still sleeping, still in the swift-moving
      dream in which he had been wrapped so long since the great ride began. The dark world was rushing by and the wind sang
      loudly in his ears. He could see nothing but the wheeling stars, and away to his right vast shadows against the sky
      where the mountains of the South marched past. Sleepily he tried to reckon the times and stages of their journey, but
      his memory was drowsy and uncertain.</p>
    <p><br></p>
    <p>There had been the first ride at terrible speed without a halt, and then in the dawn he had seen a pale gleam of gold,
      and they had come to the silent town and the great empty house on the hill. And hardly had they reached its shelter
      when the winged shadow had passed over once again, and men wilted with fear. But Gandalf had spoken soft words to him,
      and he had slept in a corner, tired but uneasy, dimly aware of comings and goings and of men talking and Gandalf giving
      orders. And then again riding, riding in the night. This was the second, no, the third night since he had looked in
      the Stone. And with that hideous memory he woke fully, and shivered, and the noise of the wind became filled with menacing
      voices.</p>`;
  }

  ngOnInit() {
  }

}
