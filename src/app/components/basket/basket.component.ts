import { Component, inject } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [NgFor],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent {
  private basketService = inject(BasketService);
}
