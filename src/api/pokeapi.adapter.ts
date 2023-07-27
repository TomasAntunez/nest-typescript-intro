import axios from "axios";


export interface HttpAdapter {
  get<T>( url: string ): Promise<T>;
}


export class PokeapiFetchAdapter implements HttpAdapter {

  async get<T>( url: string ): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }

}


export class PokeapiAdapterAxios implements HttpAdapter {

  private readonly axios = axios;


  async get<T>( url: string ): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }


  async post( url: string, data: any ) {}


  async put( url: string, data: any ) {}


  async patch( url: string, data: any ) {}


  async delete( url: string ) {}

}
