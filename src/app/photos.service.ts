import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient){}

  getPhoto() { 
    return this.http.get<UnsplashResponse>(
      // Url
      'https://api.unsplash.com/photos/random', 
      {
        headers: {
          Authorization:
          'Client-ID oB7Iro-0wnGiuj49ur7wPoq6f4ejQxT12wtQzaOx4nc'
        }
      }
    );
  
  }
}
