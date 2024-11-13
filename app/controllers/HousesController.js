import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { housesService } from "./HousesService.js";


export class HousesController {
  constructor() {
    console.log('🏠🎮');
    this.fetchHouses()
    AppState.on('houses', this.drawHouses)
    AppState.on('account', this.showForm)
  }



  async fetchHouses() {
    try {
      await housesService.fetchHouses()
    } catch (error) {

    }

  }

  async postHouse() {
    console.log('➕🏠')
    try {
      event.preventDefault()
      const formElm = event.target
      const formData = getFormData(formElm)
      console.log('📃🏠', formData)
      await housesService.postHouse(formData)
      Pop.toast("House Listing Created!", 'success', 'top')

    } catch (error) {
      console.error(error)
      const errorMessage = `Crap on a stick${error.message}`
      Pop.toast(errorMessage, 'error', 'top', 8000, true)

    }
  }

  drawHouses() {
    const houseListingsElm = document.getElementById('house-listings')
    houseListingsElm.innerHTML = ''
    AppState.houses.forEach(house => houseListingsElm.innerHTML += house.HouseCard)
  }

  showForm() {
    const houseFormElm = document.getElementById('create-house-form')
    houseFormElm.classList.remove('d-none')
  }

  async deleteHouse(houseId) {
    try {

      await housesService.deleteHouse()
    } catch () {

    }
  }

}
