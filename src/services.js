
import { config } from "./config";

class AnimalService {
  /**
   * @returns {Promise<Animal[]>}
   */
  async getAll() {
    const response = await fetch(`${config.apiUrl}/animales`)
    const data = await response.json()
    if(!response.ok){
      throw new Error(data.message)
    }
    return data
  }
  /**
   * @param {number} id 
   * @returns {Promise<Animal>}
   */

  async getOne(id) {
    const response = await fetch(`${config.apiUrl}/animal/${id}`)
    const data = await response.json()
    if(!response.ok){
      throw new Error(data.message)
    }
    return data.data

  }
}

export const animalService = new AnimalService();
