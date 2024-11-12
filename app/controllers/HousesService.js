import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "../services/AxiosService.js"


class HousesService {


  async fetchHouses() {
    const response = await api.get('api/houses')
    console.log('fetching hauses', response.data)
    const houses = response.data.map(houseData => new House(houseData))
    console.log('⭐🏠', houses)
    AppState.houses = houses
  }







}

export const housesService = new HousesService()