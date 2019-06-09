import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  providers: [ProductService]
})
export class ProductInfoComponent implements OnInit {
  prodName = this.route.snapshot.paramMap.get('prod');
  items = []
  imgPaths = {}
  checkedList = []

  //radio nav
  checkedClass = {'checked': true}

  selectedList = {}

  //item captions
  captions = {}
  

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.prodName = params['prod']; // grab the parameter from url
      this.items = this.productService.getItemList(this.prodName);
      this.imgPaths = this.productService.getImagePaths(this.prodName)
      for(let item of this.items){
        this.checkedList[item] = []
        for(let path of this.imgPaths[item]){
          this.checkedList[item][path] = false
        }
        this.checkedList[item]["1"] = true
      }
      this.captions = this.productService.getCaptions(this.prodName)
      // console.log("INITIAL: " )
      // console.log(this.checkedList)
    });

  }

  navOnClick(item, path){
    // console.log("navOnClick: " + item + ", " + path)
    // console.log(this.checkedList[item])
    for(let p of this.imgPaths[item]){
      // console.log("item: " + item + ", p: " + p)
      this.checkedList[item][p] = false;
    }
    this.checkedList[item][path] = true
    // console.log(this.checkedList[item])

  }

  checkClass(item, path){
    let itemPath = item + "_" + path
    // console.log("checkClass: " + itemPath + ": " + this.checkedList[item][path])

    if(this.checkedList[item][path]){
      return true
    }
    return false
  }

}
