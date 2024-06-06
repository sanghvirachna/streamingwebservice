import { Component } from '@angular/core';
import { FaqComponent } from '../faq/faq.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FaqComponent,FormComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
