import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  title: string = 'Child Title';

  syncProducts(): void {
    // Achieve the operation on trigger of output
    console.log('Trigger from Child using -- output()');
    
  }

  getOutputFromObservable(output: any) {
    console.log('Receiving OutputFromObservable -- ',output);
    
  }
}
