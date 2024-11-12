

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
  }


  get HouseCard() {
    return `
   <div class="col-md-4">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold fs-4">
              $${this.price} 
              <p> Built in: ${this.year} | Levels: ${this.levels}
              </p>
             </p>
             <p>
             Bedrooms: ${this.bedrooms}
             </p>
             <p>
             Bathrooms: ${this.bathrooms}
             </p>
             < class="mb-0">
             ${this.description}
              </p>
             <div class="d-flex justify-content-between">
              <p></p>
              <div>
                <span></span>
                <img class="profile-picture profile-picture-sm" src="" alt="A beautiful picture of "/>
              </div>
             </div>
              
           </div>
         </div>
       </div>
  
  
  `
  }

}