import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { housesService } from "./HousesService.js";


export class HousesController {
  constructor() {
    console.log('🏠🎮');
    this.fetchHouses()
    AppState.on('houses', this.drawHouses)
  }



  async fetchHouses() {
    try {
      await housesService.fetchHouses()
    } catch (error) {

    }

  }

  drawHouses() {
    console.log('🖋️🏠')
    const houseListingsElm = document.getElementById('house-listings')
    houseListingsElm.innerHTML = ''
    AppState.houses.forEach(house => houseListingsElm.innerHTML += house.HouseCard)
  }


}
