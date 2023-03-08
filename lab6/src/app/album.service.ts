import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL = "https://jsonplaceholder.typicode.com"
  constructor(private client: HttpClient) { }

  getAlbums() : Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number) : Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  getPhotos(id: number) : Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }

  addAlbum(album: Album) : Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album)
  }

  updateAlbum(id: number, edittedAlbum: Album){
    return this.client.put<Album>(`${this.BASE_URL}/albums/${id}`, edittedAlbum)
  }
}
