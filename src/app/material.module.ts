import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
