import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allPets() {
    return this._http.get('/pets/all');
  }

  newPet(pet) {
    return this._http.post('/pets/new', pet);
  }

  removePet(petId) {
    return this._http.delete(`/pets/${petId}`);
  }

  updatePet(pet) {
    return this._http.put('/pets/edit', pet);
  }

  findPet(petId) {
    return this._http.get(`/pets/${petId}`);
  }

  likePet(pet) {
    return this._http.put('/pets/', pet);
  }
}