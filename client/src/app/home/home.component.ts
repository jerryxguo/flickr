import { Component, OnInit } from '@angular/core';
import { Flickr} from '../flickr';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flickrs : Flickr[];
  private searchTag ="" ;
  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.getPhotos();
  }
  onClick(newSearch) {
    this.searchTag = newSearch;
    this.getPhotos();
  }
  onKeyup(newSearch, event) {
    if (event.key === "Enter") {
      this.searchTag = newSearch;
      this.getPhotos();
    }
  }
  getPhotos(): void {
    this.flickrService.getPhotos(this.searchTag)
      .subscribe(flickrs => this.flickrs = flickrs);
  }
}
