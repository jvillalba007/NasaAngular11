import { Component, OnInit } from '@angular/core';
import { Apod } from '../../model/apod.model';
import { NASAService } from '../../services/nasa.services';

@Component({
  selector: 'app-apods',
  templateUrl: './apods.component.html',
  styleUrls: ['./apods.component.css'],
})
export class ApodsComponent implements OnInit {
  apods: Apod[] = [];

  constructor(private nasaService: NASAService) {}

  ngOnInit(): void {
    this.nasaService.GetNasaAPODS().subscribe((apods: Apod[]) => {
      this.apods = apods;
    });
  }
}
