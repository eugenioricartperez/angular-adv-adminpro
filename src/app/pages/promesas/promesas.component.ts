import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    });
/*     const promesa = new Promise( (resolve , reject  ) => {
      if ( true ) {
        resolve ('Hola mundo');
      } else {
        reject('merda');
      }

    });

    promesa.then((x)=>{
      console.log(`Terminada la promesa ${x}`);
    }).catch (( error )=>{
       console.log (`error en la promesa ${ error }`);
    })
     console.log('Fin del Init'); */

  }

  getUsuarios() {

    return new Promise((resolve,rejected) => {
    
      fetch('https://reqres.in/api/users')
        .then( resp => {
  resp.json().then(body => resolve (body.data));
        } );
        //return promesa_usuarios;
    });
  }


}
