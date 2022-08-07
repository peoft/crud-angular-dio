import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number:number = 0;
  text:string = 'hello world!';
  date = new Date;
  pessoa = {
    nome: 'Ivonaldo',
    idade: '26',
    profissao: 'Instrutor'
  }
  nomes = ['Ivonaldo'];

  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text);
  }

  mudaValor() {
    this.number = 123456789;    
  }

  add(value: string) {
    this.nomes.push(value);
  }

}
