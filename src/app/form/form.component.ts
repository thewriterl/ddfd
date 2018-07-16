import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
}  
  parametro: any;

  ngOnInit() {
    this.parametro = this.route.snapshot.paramMap.get('valor');   
  }

}
