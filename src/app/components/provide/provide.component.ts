import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-provide',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './provide.component.html',
  styleUrl: './provide.component.css'
})
export class ProvideComponent {
  faqs = [
    {id:"01", question:"What is StreamVibe", answer:"StreamVibe is a video streaming platform that allows users to upload, view, and share videos.", selected: false},
    {id:"02", question:"How to use StreamVibe", answer:"To use StreamVibe, you need to create an account. Once you have an account, you can subscribe to channels, create your own channel, upload videos, and view videos.", selected: false},
    {id:"03", question:"How to create an account", answer:"To create an account, click on the 'Sign Up' button on the homepage. You will need to provide your email address, username, and password.", selected: false},
    {id:"04", question:"How to subscribe to a channel", answer:"To subscribe to a channel, click on the 'Subscribe' button on the channel page.", selected: false},
    {id:"05", question:"How to create a channel", answer:"To create a channel, click on the 'Create Channel' button on the homepage. You will need to provide a channel name and description.", selected: false},
    {id:"06", question:"How to upload a video", answer:"To upload a video, click on the 'Upload Video' button on the homepage. You will need to provide a video title, description, and file.", selected: false},
    {id:"07", question:"How to delete a video", answer:"To delete a video, go to the video page and click on the 'Delete' button.", selected: false},
    {id:"08", question:"How to edit a video", answer:"To edit a video, go to the video page and click on the 'Edit' button.", selected: false},
  ];
  
  toggleAnswer(faq: { id: string; question: string; answer: string; selected: boolean }): void {
    faq.selected = !faq.selected;
  }
  
   
}
