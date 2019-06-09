import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getImagePaths(prod) {
    let params: URLSearchParams = new URLSearchParams();
    let productList = {}
    productList['outdoor'] = {}
    productList['restaurant'] = {}
    productList['spa'] = {}
    productList['photo'] = {}

    const folder = '/skyswing/assets/images/' + 'swing';

    productList['outdoor']["Hot Air Balloon"] = [1,2,3,4]
    productList['outdoor']["Swing"] = [1,2,3,4,5]
    productList['outdoor']["Rafting"] = [1]
    productList['outdoor']["VW Safari"] = [1,2,3,4] //6
    productList['outdoor']["ATV"] = [1,2] 

    productList['restaurant']["Restaurant"] = [1,2,3,4,5] //9
    productList['restaurant']["Food"] = [1,2,3,4,5] //6

    productList['photo']["Photo Spots"] = [1,2,3,4,5] //8
    productList['photo']["Special Moments"] = [1,2,3,4] //8

    productList['spa']["Spa and Massage"] = [1]   
    productList['spa']["Relax"] = [1,2]


    // console.log(productList[prod])
    return productList[prod]
  }

  getItemList(prod){
    let productList = {}
    productList['outdoor'] = ["Hot Air Balloon", "Swing", "Rafting", "VW Safari", "ATV"]
    productList['restaurant'] = ["Restaurant", "Food"]
    productList['spa'] = ['Spa and Massage', 'Relax']
    productList['photo'] = ['Photo Spots', 'Special Moments']

    return productList[prod]
  }

  getCaptions(prod){
    let productList = {}
    productList['outdoor'] = {}
    productList['restaurant'] = {}
    productList['spa'] = {}
    productList['photo'] = {}

    productList['outdoor']["Hot Air Balloon"] = "Experience hot-air balloon adventure and enjoy spectacular view over the beautiful rice terrances and forests of Ubud."
    productList['outdoor']["Swing"] = "Life throws many curve balls , and if you don't swing... you're never going to hit any! "
    productList['outdoor']["Rafting"] = "Relief your stress by defeating the water rafting challenges and also admiring the beauty of the landscape."
    productList['outdoor']["VW Safari"] = "Explore the beautiful scenery of surrounding villages in style with the classic VW Safari. "
    productList['outdoor']["ATV"] = "Cruise through the natural beauty of the paddy fields and forests."

    productList['restaurant']["Restaurant"] = "Enjoy our delightful food & beverage offerings in our restaurant alongside paddy fields to relax and unwind."
    productList['restaurant']["Food"] = "Our menu, exclusively prepared by our executive chef will pleasantly surprise you during lunch or romantic dinner."
    productList['photo']["Photo Spots"] = "You will find every corner of our place perfect instagrammable because that's what's important, right?"
    productList['spa']["Spa and Massage"] = "What's better than enjoying our special spa & massage prepared by our professional masseuse after a long day of exploring Bali"

    return productList[prod]
  }
}
