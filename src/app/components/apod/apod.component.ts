import { Component, OnInit } from '@angular/core';
import { Apod } from '../../model/apod.model';
import { NASAService } from '../../services/nasa.services';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
})
export class ApodComponent implements OnInit {
  apod: Apod = {
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  };

  constructor(private nasaService: NASAService) {}

  ngOnInit(): void {
    this.nasaService.GetNasaAPODToday().subscribe((apod: Apod) => {
      this.apod = apod;
    });
  }
}
