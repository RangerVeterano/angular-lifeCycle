import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {

  nombre: string = 'Ignacio';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }

  ngAfterContentInit(): void {
    console.log('After Content init');
  }

  ngAfterContentChecked(): void {
    console.log('After content check');
  }

  ngAfterViewInit(): void {
    console.log('After view init');
  }

  ngAfterViewChecked(): void {
    console.log('After view check');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe({
      next: i => {
        this.segundos = i;
      }
    })
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  guardar() {
    console.log('Se esta guardando');
  }

}
