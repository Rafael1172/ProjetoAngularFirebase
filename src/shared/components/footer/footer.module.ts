import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FooterComponent // importa components
  ],
  imports: [
    CommonModule, // importo os módulos externos
    IonicModule
  ],
  exports:[
    FooterComponent //exportar os components
  ]
})
export class FooterModule { }
