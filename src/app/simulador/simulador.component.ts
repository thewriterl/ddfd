import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  constructor(private router: Router) { }

  emprestimo: any;

  ngOnInit() {
    document.getElementById('valor').focus();
  }

  simular(emprestimo) {
    if (emprestimo == undefined) {
      return swal('erro', 'Digite quanto você quer emprestado', 'error');
    }
    this.router.navigateByUrl('signup/' + emprestimo);
  }

  mais(valor) { 
    if (valor == undefined) {
      valor = 0
    }
    this.emprestimo = Number(valor) +100;
  }

  menos(valor) {
    if (valor == undefined) {
      valor = 0
    }
    this.emprestimo = Number(valor) - 100;
    if (this.emprestimo <= 0) {
      return this.emprestimo = 0;
    }
  }

  helper() {
    Number(this.emprestimo)
    if (this.emprestimo < 0) {
      this.emprestimo = 0;
    }
  }

}
