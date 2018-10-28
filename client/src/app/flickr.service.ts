import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Flickr} from './flickr';


@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private flickrUrl = 'http://localhost:3000/photos/';
  constructor(private http: HttpClient) { }

  getPhotos(tag : string): Observable<Flickr[]> {

    return this.http.get<Flickr[]>(this.flickrUrl + tag)
  }
}
