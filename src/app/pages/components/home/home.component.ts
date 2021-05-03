import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import { Planets, SelectedPlanets } from '../../models/home.model';
import { CommonService } from '../../services/apiServices/common.service';
import { AppConstants } from 'src/app/app.constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('text') text!: ElementRef;
  timeTaken: number = 0;
  totalPlanets: string[] | undefined;
  planets: Planets[] = [];
  updatePlanet: string = '';
  // plantOneDist: Planets[] = [];
  // plantTwoDist: Planets[] = [];
  // plantThreeDist: Planets[] = [];
  // plantFourDist: Planets[] = [];
  flag: boolean = false;
  col: number = 4;
  selectedPlanets!: SelectedPlanets;
  constructor(private commonService: CommonService,
    private errorService: ErrorService,
    private formBuilder: FormBuilder) {
    this.selectedPlanets = new SelectedPlanets();
    this.totalPlanets = AppConstants.PLANETNAMES;
    this.getPlanets();
  }
  ngOnInit(): void {
  }

  planetForm = this.formBuilder.group({
    planetOne: ['', [Validators.required]],
    planetTwo: ['', [Validators.required]],
    planetThree: ['', [Validators.required]],
    planetFour: ['', [Validators.required]]
  });

  getPlanets() {
    this.commonService.getPlanets().subscribe((response: any) => {
      this.planets = response;
      this.planets = this.planets.map((arr) => {
        arr.disabled = false;
        return arr;
      });
    }, (err) => this.errorService.showError("Unable to fetch Planets!"));
  }

  onChange(event: any, planet: string) {
    this.setSelectedPlanet(planet, event.value.name);
  }

  @HostListener("window:resize", []) columns() {

    if (window.innerWidth >= 1200) {
      this.col = 4; // lg
    } else if (window.innerWidth >= 992) {
      this.col = 3;//md
    } else if (window.innerWidth >= 768) {
      this.col = 3;//sm
    } else if (window.innerWidth < 768) {
      this.col = 2;//xs
    }

  }

  resetForm() {
    this.planetForm.reset();
  }

  setSelectedPlanet(planet: string, value: any) {
    this.timeTaken = 0;
    if (planet == 'Planet One') {
      this.selectedPlanets.planetOne = value;
    } else if (planet == 'Planet Two') {
      this.selectedPlanets.planetTwo = value;
    } else if (planet == 'Planet Three') {
      this.selectedPlanets.planetThree = value;
    } else if (planet == 'Planet Four') {
      this.selectedPlanets.planetFour = value;
    }
    let allPlanets = this.planets;

    for (let i = 0; i < allPlanets.length; i++) {
      if (this.selectedPlanets.planetOne == allPlanets[i].name ||
        this.selectedPlanets.planetTwo == allPlanets[i].name ||
        this.selectedPlanets.planetThree == allPlanets[i].name ||
        this.selectedPlanets.planetFour == allPlanets[i].name) {
        allPlanets[i].disabled = true;
      } else {
        allPlanets[i].disabled = false;
      }

      if (allPlanets[i].disabled) {
        this.timeTaken += Number(allPlanets[i].distance);
      }
    }

  }

}
