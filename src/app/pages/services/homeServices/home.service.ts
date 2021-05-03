import { Injectable } from '@angular/core';
import { Planets, SearchUnit } from '../../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private selectedUnits: SearchUnit[] = [];
  private selectedPlanet: Planets[] =[];
  constructor() { }

  getSelectedUnits(): SearchUnit[] {
    return this.selectedUnits;
  }

  getPlanetUnits(planets: any): Planets[] {
    this.selectedPlanet = planets;
    return this.selectedPlanet;
  }

  
}
