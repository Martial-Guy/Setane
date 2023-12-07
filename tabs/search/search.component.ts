import { Component } from '@angular/core';
import { AddCartService } from 'src/app/serivces/add-cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
 
  query!:String;
  searchBtn!:boolean
  categories:any[]=[]
  searchBar!:boolean
  restaurant:any[]=[]
  allRestaurant:any[]=[]
  profile:any;
  isLoading!:boolean
  item={
    icon:'search-outline',
    color:'primary',
    title:'Sorry ! No Result found',
    // image:'https://pixabay.com/illustrations/emoji-smiley-sad-crying-tear-4827231'
  } 
  constructor(
   private addcart:AddCartService
  ){
    
  }
  ngOnInit(){

    this.allRestaurant= [
      {
        id: '1',
        cover: 'assets/dishes/chilli.jpg',
        name: 'Chilli',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 2,
        delivery_time: 25,
        distance: 2.5,
        price: 10
      },
      {
        id: '2',
        cover: 'assets/dishes/2.jpg',
        name: 'Stayfit1',
        cuisines: [
          'Italian',
          'Mexican',
          'Chinese'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 10
      },
      {
        id: '3',
        cover: 'assets/dishes/EGOUSSI.jpg',
        name: 'Egoussi soup',
        cuisines: [
          'Cameroon',
          'Nigerian',
          'Tchadian'
        ],
        rating: 3,
        delivery_time: 25,
        distance: 2.5,
        price: 50,
        latitude: 0,
        longitude: 0
      },
    ];
    this.categories = [
      {id: 1, cover: 'assets/dishes/ndole.jpg', name: 'Cameroon'},
      {id: 2, cover: 'assets/dishes/2.jpg', name: 'Indian'},
      {id: 3, cover: 'assets/dishes/3.jpg', name: 'Italian'},
      {id: 4, cover: 'assets/dishes/10.jpeg', name: 'Rolls'},
      {id: 5, cover: 'assets/dishes/chicAfro.jpg', name: 'Nigerian'},
      {id: 6, cover: 'assets/dishes/chilli.jpg', name: 'Mexican'},
      {id: 7, cover: 'assets/dishes/6.jpeg', name: 'American'},
      {id: 8, cover: 'assets/dishes/7.jpeg', name: 'Chinese'},
      {id: 9, cover: 'assets/dishes/ramen.jpg', name: 'Japanies'},
      {id: 9, cover: 'assets/dishes/dol.jpg', name: 'Polinecian'},
    ];
  }
  updateSearch(query?:any){
    if(query) this.query=query;
      this.searchBar=true;
      this.isLoading=true
     setTimeout(()=>{
    this.restaurant=this.allRestaurant.filter(x=>{
      // const data= x.cuisines.find((z: any)=>z==this.query)
      // console.log('data:',data)
      // if(data) return true;
      // return false;
      return (x.name).toLowerCase().includes(this.query.toLowerCase())
      || x.cuisines.find((z:any) => z.toLowerCase().includes(this.query.toLowerCase()))
     })
     this.isLoading=false
     console.log('update restaurent data ',this.restaurant)
  },3000)
   
  }
  onInputQuery(){
    console.log('this is the value f the query data:',this.query)
     if (this.query.length >0) {
        this.searchBtn=true
      
     } else {
        this.searchBtn=false
     }
  }
  toogleSearch(val?:any){
    if (val) {
      this.query=''
      this.onInputQuery()
    }
    this.searchBar=!this.searchBar
    
  }
  addToCart(item: any) {
    this.addcart.addItem(item);
  }
}
