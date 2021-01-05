import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso:number = 65;
  @Input() btnClass: string = 'btn btn-primary';

@Output() nuevoValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }




  cambiarPorcentaje (valor:number){
    
    this.progreso = this.progreso + valor;
    if (this.progreso >=100)
    {
      this.progreso=100;
      
    }
    if (this.progreso<0)
    {
      this.progreso=0;
    }
    this.nuevoValor.emit(this.progreso);
    return this.progreso;
  }

  onChange(event: number ){
    //console.log("hola");
    //this.nuevoValor.emit(event);
    this.cambiarPorcentaje(event);
  }


}
