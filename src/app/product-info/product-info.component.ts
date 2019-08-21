import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service'
import { Meta, Title } from '@angular/platform-browser';


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
  checkedClass = { 'checked': true }

  selectedList = {}

  //item captions
  captions = {}


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.prodName = params['prod']; // grab the parameter from url
      this.items = this.productService.getItemList(this.prodName);
      this.imgPaths = this.productService.getImagePaths(this.prodName)
      for (let item of this.items) {
        this.checkedList[item] = []
        for (let path of this.imgPaths[item]) {
          this.checkedList[item][path] = false
        }
        this.checkedList[item]["1"] = true
      }
      this.captions = this.productService.getCaptions(this.prodName)
      // console.log("INITIAL: " )
      // console.log(this.checkedList)
      this.title.setTitle("Sky Swing Bali - " + this.prodName);
      let metaDesc = ""
      for (let it of this.items) {
        metaDesc = metaDesc + this.captions[it] + ", "
      }
      this.meta.updateTag({ name: 'description', content: metaDesc });
    });

  }

  navOnClick(item, path) {
    // console.log("navOnClick: " + item + ", " + path)
    // console.log(this.checkedList[item])
    for (let p of this.imgPaths[item]) {
      // console.log("item: " + item + ", p: " + p)
      this.checkedList[item][p] = false;
    }
    this.checkedList[item][path] = true
    // console.log(this.checkedList[item])

  }

  checkClass(item, path) {
    let itemPath = item + "_" + path
    // console.log("checkClass: " + itemPath + ": " + this.checkedList[item][path])

    if (this.checkedList[item][path]) {
      return true
    }
    return false
  }

  nextImage(item) {
    let activeImg = 1;
    let numItems = this.imgPaths[item].length;
    for (let p of this.imgPaths[item]) {
      if (this.checkedList[item][p] == true) {
        this.checkedList[item][p] = false
        activeImg = p;
        break;
      }
    }
    let nextImg = activeImg + 1
    if (numItems < nextImg) {
      nextImg = 1;
    }

    this.checkedList[item][nextImg] = true;
    console.log("nxt img: " + nextImg)
    console.log("tot img: " + numItems)

    console.log("prv img stats: " + this.checkedList[item][activeImg])
    console.log("cur img stats: " + this.checkedList[item][nextImg])

  }
  prevImage(item) {
    let activeImg = 1;
    let numItems = this.imgPaths[item].length
    ;
    for (let p of this.imgPaths[item]) {
      if (this.checkedList[item][p] == true) {
        this.checkedList[item][p] = false
        activeImg = p;
        break;
      }
    }

    let nextImg = activeImg - 1
    if (nextImg == 0) {
      nextImg = numItems;
    }

    this.checkedList[item][nextImg] = true;

    console.log("nxt img: " + nextImg)
    console.log("tot img: " + numItems)
    console.log("items: " + this.items)



    console.log("prv img stats: " + this.checkedList[item][activeImg])
    console.log("cur img stats: " + this.checkedList[item][nextImg])

  }

}
