import { ErrorOutline } from "@mui/icons-material";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";
import axios from "axios";

class ProductService {
   private readonly path: string;

   constructor () {
      this.path = serverApi;
   }

   /** Multy usage method */
   public async getProducts(input: ProductInquiry): Promise<Product[]>{ 
      try{ 
         let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
         if(input.productCollection) url += `&productCollection=${input.productCollection}`;
         if(input.search) url += `&search=${input.search}`;

         /** RestAPI ning methodi get bo'lganligi uchun 
          * axiosning get() methodidan foydalanaman */
         const result = await axios.get(url);

         return result.data;

      } catch(err) {
         console.log("Error, getProducts:", err);
         throw err;
      }
   }

}

export default ProductService;