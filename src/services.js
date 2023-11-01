
import { config } from "./config";

class AnimalService {
  /**
   * @returns {Promise<Animal[]>}
   */
  async getAll() {
    const response = await fetch(`${config.huachitosApi}/animales`)
    const data = await response.json()
    if(!response.ok){
      throw new Error(data.message)
    }
    return data.data
  }
  /**
   * @param {number} id 
   * @returns {Promise<Animal>}
   */

  async getOne(id) {
    const response = await fetch(`${config.huachitosApi}/animal/${id}`)
    const data = await response.json()
    if(!response.ok){
      throw new Error(data.message)
    }
    return data.data

  }
  /**
   * 
   * @param {Animal} body 
   * @returns {Promise<any>}
   */
  async createPet(body){
    const response = await fetch(`${config.siteApi}/create-pet`,{
      method:"POST",
      body:JSON.stringify(body)
    })
    const data = await response.json()
    if(!response.ok){
      throw data
    }
    return data

  }
}

export const animalService = new AnimalService();
