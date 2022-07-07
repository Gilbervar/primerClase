import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

mostrar = true;

frase: any = {
  mensaje:'Tu vida cambiará cuando tú cambies. Esto no funciona sentándote a esperar a que suceda.',
  autor: 'Marta Guerri'
};

personajes: string[] = ['Spider-Man', 'Capitán América', 'Thor', 'Black Panther', 'Gamora'];

  constructor() { }

  ngOnInit(): void {
  }

}
