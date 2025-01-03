import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: false,

  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  public counter = signal(10);
  public squaredCounter = computed(() => this.counter() * this.counter());
  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
