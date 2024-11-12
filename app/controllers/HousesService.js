import { api } from "../services/AxiosService.js"


class HousesService {


  async fetchHouses() {
    const response = await api.get('api/houses')
    console.log('fetching hauses', response.data)
  }







}

export const housesService = new HousesService()