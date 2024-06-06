import { Component } from '@angular/core';
import { PlansComponent } from '../plans/plans.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [PlansComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}
