import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = environment.URL + 'persona/';
  url: string = "";

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  } 

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }
  
  public uploadImage($event:any, name:string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/'+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error)
    )
  }
  
  getImages() {
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    })
    .catch(error => console.log(error))
  }

}
