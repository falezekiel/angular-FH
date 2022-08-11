import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];

   heroeBorrado:string= '';
  borrarHeroe():void{

    //solucion para cuando devuelve algo o undefined con operador ||
  this.heroeBorrado = this.heroes.shift() || '';
  }

}
