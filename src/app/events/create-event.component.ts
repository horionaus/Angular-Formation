import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>Create a new Event</h3>
      <br>
      <br>
      <button typer="submit" clas="btn btn-primary">Save</button>
      <button typer="button" clas="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `
})

export class CreateEventComponent {
  isDirty:boolean = true;

  constructor(private router: Router) {
  }

  cancel() {
    this.router.navigate(['/events']);
 }
}
