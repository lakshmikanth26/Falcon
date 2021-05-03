export class Planets {
    name: string;
    distance: string;
    disabled: boolean;
    constructor(name: string, distance: string, disabled: boolean) {
        this.name = name != null ? name : '';
        this.distance = distance != null ? distance : '';
        this.disabled = disabled != true ? disabled : false;

    }
}

export class SelectedPlanets {
    planetOne!: string;
    planetTwo!: string;
    planetThree!: string;
    planetFour!: string;
}
export class SearchUnit {
    selectedPlanet: Planets ;
   // selectedVehicle: Vehicle ;
    constructor(search: any) {
        this.selectedPlanet = search.selectedPlanet;
        //this.selectedVehicle = search.selectedVehicle;
    }
}

export class Vehicle {
    name: string;
    total_no: number;
    max_distance: number;
    speed: number;
    constructor(vehicle: any) {
        this.name = vehicle.name;
        this.total_no = vehicle.total_no;
        this.max_distance = vehicle.max_distance;
        this.speed = vehicle.number;
    }
}

export class VehicleDisplay {
    vehicle: Vehicle;
    available: number;
    disabled: boolean;
    constructor(response: any) {
        this.vehicle = response.vehicle;
        this.available = response.available;
        this.disabled = response.disabled;
    }
}