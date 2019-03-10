import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
 

  constructor(public apirest: ApiRestService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  public pizzas: [];

  ngOnInit() {
    this.getListaPizzas();
  }
  
  getListaPizzas(){
    this.apirest.getPizzas().subscribe((data: []) => {
      console.log(data);
      this.pizzas = data;
    });
  }

  eliminarPizza(idPizza: string) {
    this.apirest.deletePizza(idPizza)
      .subscribe(res => {
          this.getListaPizzas();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
