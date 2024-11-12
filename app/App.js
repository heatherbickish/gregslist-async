import { AuthController } from './controllers/AuthController.js';
import { CarsController } from './controllers/CarsController.js';
import { HousesController } from "./controllers/HousesController.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  CarsController = new CarsController()

  HousesController = new HousesController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
