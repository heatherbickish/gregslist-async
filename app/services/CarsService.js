import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js"


class CarsService {

  async postCar(formData) {
    // const response = await fetch('https://sandbox.codeworksacademy.com/api/cars', { method: 'POST', body: JSON.stringify(formData) }) simple example of post with fetch
    const response = await api.post('api/cars', formData) // changing the Database through the API
    // console.log('✨🚙📡', response.data);
    const createdCar = new Car(response.data) // changing the local state based on the API response
    AppState.cars.push(createdCar)
  }
  async fetchCars() {
    // const response = await fetch('https://sandbox.codeworksacademy.com/api/cars')
    // console.log('🚙📡', response);
    // const data = await response.json()
    // console.log('🚙🚙🚙', data);
    // const response = await api.get('https://sandbox.codeworksacademy.com/api/cars')
    const response = await api.get('api/cars')
    // console.log('🚙📡', response.data);
    const cars = response.data.map(carData => new Car(carData))
    // console.log('🚙✨', cars);
    AppState.cars = cars
    // console.log(AppState.cars);
  }

  async deleteCar(carId) {
    const response = await api.delete(`api/cars/${carId}`) // tell the API to delete the car
    // console.log('🔥🚙📡', response.data);
    // remove the car from local state
    const carToRemove = AppState.cars.find(car => car.id == carId)
    const indexToRemove = AppState.cars.indexOf(carToRemove)
    AppState.cars.splice(indexToRemove, 1)
  }

}

export const carsService = new CarsService()