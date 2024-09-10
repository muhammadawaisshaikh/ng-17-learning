import { Component, input, output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { outputFromObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  status = output<string>();
  title = input<string>();

  // outputFromObservable API
  status$ = new BehaviorSubject('');
  getOutputObservable = outputFromObservable<any>(this.status$);

  onChangeStatus() {
    this.status.emit('Status Changed');
    this.status$.next('In-Progress');
  }
}
