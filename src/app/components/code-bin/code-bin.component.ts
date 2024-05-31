import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippet';

@Component({
  selector: 'app-code-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-bin.component.html',
  styleUrl: './code-bin.component.css'
})
export class CodeBinComponent {

  constructor(private dbService: DbService) {}

  title = new FormControl("",[
    Validators.required
  ])

  code = new FormControl("",[
    Validators.required
  ])

  codeBinForm = new FormGroup({
    title: this.title,
    code: this.code
  })

  async save() {
    console.log(this.codeBinForm.value);
    await this.dbService.createSnippet(this.codeBinForm.value as Snippet);
    // await this.dbService.createSnippet(this.codeBinForm.value.title!, this.codeBinForm.value.code!);
  }

}
