import { Component, OnInit, Input } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-pizza',
  templateUrl: './nueva-pizza.page.html',
  styleUrls: ['./nueva-pizza.page.scss'],
})
export class NuevaPizzaPage implements OnInit {

  constructor(public apirest: ApiRestService, public router: Router) { }
  @Input() pizzaData = { nombre: '', ingredientes: '', calidad: '', precio: 0 };

  ngOnInit() {
  }

  anadirPizza(){
    this.apirest.addPizza(this.pizzaData).subscribe((result) => {
      this.router.navigate(['/list']);
    }, (err) => {
      console.log(err);
    });
  }

}
