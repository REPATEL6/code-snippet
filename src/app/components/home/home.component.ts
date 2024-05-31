import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private dbService: DbService) {}

  items:any[] = []
  ngOnInit() {
    this.dbService.getAllSnippet().then((data:any) =>{
      this.items = data
    })
  }

}
