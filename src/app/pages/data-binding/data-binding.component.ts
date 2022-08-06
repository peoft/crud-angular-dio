import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text:string = 'Paulo Eduardo';
  imageUrl:string = 'https://picsum.photos/300/300';
  imageDesc:string = 'Isso é uma imagem';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(value:any) {
    this.text = 'Cristina Fischer'
    console.log('clicou aqui ', value);
  }
} 
