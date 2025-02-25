import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
import axios from "axios"
export const useCounterStore = defineStore('store', {
  state: () => ({
    ProductsApi:[],
  }),

  // productlarni becentdan qabul qilyabdi
  actions:{
     async GET_PRODUCTS_API  () {
      try {
        const Fetch_Product = await axios.get('https://insofuz.herokuapp.com/productlar/');
        this.ProductsApi = Fetch_Product.data;
        console.log(this.ProductsApi);
        this.SearchProducts=this.ProductsApi
      }

      catch (err) {
        console.log(err);
      }
    },

  },



})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()


  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
