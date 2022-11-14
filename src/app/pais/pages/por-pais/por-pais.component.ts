import { Component } from '@angular/core'
import { PaisService } from '../../services/pais.service'
import { Country } from '../../interfaces/pais.interface'
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  public termino: string = ''
  public hayError: boolean = false
  public mostrarSugerencias: boolean = false
  public paises: Country[] = []
  public paisesSugeridos: Country[] = []
  constructor(private paisService: PaisService) { }
  buscar(termino: string) {
    this.hayError = false
    this.mostrarSugerencias = false
    this.termino = termino
    this.paisService.buscarPais(termino).subscribe({
      next: paises => {
        this.paises = paises
        this.paisesSugeridos = []
      },
      error: err => {
        this.hayError = true
        this.paises = []
      }
    })
  }
  sugerencias(termino: string) {
    this.hayError = false
    this.mostrarSugerencias = true
    this.termino = termino
    this.paisService.buscarPais(termino).subscribe({
      next: paises => this.paisesSugeridos = paises.splice(0, 10),
      error: err => this.paisesSugeridos = []
    })
  }
}