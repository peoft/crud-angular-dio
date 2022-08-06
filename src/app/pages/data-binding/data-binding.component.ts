import { ThisReceiver } from '@angular/compiler';
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
  buttonText:string = 'Clique aqui';
  //textRed:boolean = false;
  textRed:string  = 'text-red';
  bgColor:string = 'green';
  fontSize:string = '20px';
  widthImg:number = 600;
  textInput:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(value:any) {
    //class binding
    //this.textRed = true;
    console.log('clicou aqui ', value);
  }
} 
