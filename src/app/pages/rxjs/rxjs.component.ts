import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {
   
   public intervalSubs:Subscription;
   i = -1;
  constructor() {



/* this.retornoObservable().pipe(retry()).subscribe(
  (valor) => {
    console.log('el valor es ', valor);
  }, (error) => { console.log(error)},
  () => console.log('final de observable')
); */
this.intervalSubs=   this.retornaIntervalo().subscribe(
  (valor)=>{
    console.log(valor);
  }
)

   }

   ngOnDestroy(): void {
     this.intervalSubs.unsubscribe();
   }


retornaIntervalo():Observable<number>{
  const intervalo$ = interval(500).pipe(
    take(1000),map (valor => valor +1 ),
    filter(valor => ( valor % 2 === 0 )? true : false )
    
  );
  return intervalo$;

}


   retornoObservable() : Observable<number>{
    const obs$ = new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        this.i++;
        observer.next(this.i);
        if (this.i ===4 ){
         clearInterval(intervalo);
         observer.complete();
        }
        if ( this.i ===2 ) {
          observer.error('merda');
        }
      }, 1000)
      
      });
      return obs$;
   }
 
}
