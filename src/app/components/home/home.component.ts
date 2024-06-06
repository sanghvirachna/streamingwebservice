import { Component } from '@angular/core';
import { ExploreComponent } from '../explore/explore.component';
import { FaqComponent } from '../faq/faq.component';
import { PlansComponent } from '../plans/plans.component';
import { ProvideComponent } from '../provide/provide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExploreComponent,FaqComponent,PlansComponent,ProvideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
