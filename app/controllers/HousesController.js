import { housesService } from "./HousesService.js";


export class HousesController {
  constructor() {
    console.log('🖋️🏠');
    this.fetchHouses()
  }



  async fetchHouses() {
    try {
      await housesService.fetchHouses()
    } catch (error) {

    }

  }



}
