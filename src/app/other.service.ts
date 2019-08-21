import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  getOtherInfo(menuItem){
    let infoList = {}
    infoList["contact"] = ""
    infoList["address"] = "Jalan Dewi Saraswati No.9, \n Br. Karang Dalem 1, Desa Bongkasa Pertiwi, Badung Utara"
    infoList["promotion"] = "COMING SOON"

    return infoList[menuItem]
  }
}
