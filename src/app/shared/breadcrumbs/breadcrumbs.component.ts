import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo:string;
  public titulosub$: Subscription;

  constructor(private router:Router) {
    this.titulosub$ = this.getDataRuta().subscribe(
      (eve) => {
        console.log(eve);
        this.titulo = eve.titulo;
        console.log("el titulo es ",this.titulo);
        document.title = `AdminPro ${this.titulo}`;
      }
    )
     

   }



    getDataRuta(){
     return this.router.events
      .pipe(filter( event => event instanceof ActivationEnd  ),
      filter( (event : ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd ) =>event.snapshot.data)
      )
 
      
    }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.titulosub$.unsubscribe();
  }
}
