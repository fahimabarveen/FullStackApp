const {default: axios} = require('axios');
      
const axiosClient = axios.create({
           baseURL :'http://localhost:1337/api',
       });
       
const getMenuCategory = () => axiosClient.get('Categories?populate=*');
         
const getProductList =() => axiosClient.get('Products?populate=*');

export default{getMenuCategory,getProductList}; 