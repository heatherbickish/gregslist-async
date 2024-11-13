import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "../services/AxiosService.js"


class HousesService {
  deleteHouse() {
  }
  async postHouse(formData) {
    const response = await api.post('api/houses', formData)
    const createdHouse = new House(response.data)
    AppState.houses.push(createdHouse)

  }


  async fetchHouses() {
    const response = await api.get('api/houses')
    const houses = response.data.map(houseData => new House(houseData))
    AppState.houses = houses
  }







}

export const housesService = new HousesService()