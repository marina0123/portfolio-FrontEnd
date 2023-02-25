import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  URL = 'http://localhost:8080/banner/';
  url: string = "";
  
  constructor(private httpClient: HttpClient, private storage: Storage) {}

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.URL + `detail/${id}`);
  } 

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, banner);
  }
  
  public uploadImage($event:any, name:string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagenB/'+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error)
    )
  }
  
  getImages() {
    const imagesRef = ref(this.storage, 'imagenB')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    }
    )
    .catch(error => console.log(error))
  }
 
}
