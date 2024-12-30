import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  standalone: false,

  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  private readonly fb = inject(FormBuilder);

  public color: string = 'green';
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });
  changeColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.color = color;
  }
}
