import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
// TIPOS DE DATOS EN TYPESCRIPT
variable : string = "Hola Mundo 34535 &&/%&/"
variable_dos : string = 'Hola Mundo 34535 &&/%&/'
numero : number = 0
flotante: number = 0.0
booleano: boolean = true
array : string[] = ["uno", "dos", "tres"]
array_dos : number[] = [1, 2, 3, 8.0]
array_tres : any[] = [1, "dos", 3, 8.0, true]
objeto : any = {nombre: "Juan", edad: 25}
nada : any = null
nada_de_nada : any
suma: number = this.numero + this.flotante

}

// 1. CICLO DE VIDA DEL COMPONENTE

 // 1. se carga lo que yo disponga en el constructor
 //--> Se cargan todas las propiedades y métodos de la clase
 // 2. se carga lo que yo disponga en el ngOnInit
 // 3. se carga lo que yo disponga en el ngAfterViewInit

