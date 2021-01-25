import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class NASAService {
  constructor(private httpClient: HttpClient) {}

  GetNasaAPODToday() {
    const api_key_nasa = 'xpp6bj4qgYwO5shXxXlRxkG2B3MqAyIjzRIrX9Y3';
    return this.httpClient.get(
      'https://api.nasa.gov/planetary/apod?api_key=' + api_key_nasa
    );
  }

  GetNasaAPODS() {
    const api_key_nasa = 'xpp6bj4qgYwO5shXxXlRxkG2B3MqAyIjzRIrX9Y3';
    return this.httpClient.get(
      'https://api.nasa.gov/planetary/apod?api_key=' + api_key_nasa + '&count=8'
    );
  }
}
