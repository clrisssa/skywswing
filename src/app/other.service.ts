import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  getOtherInfo(menuItem){
    let infoList = {}
    infoList["contact"] = "Phone or Whatsapp at +62 81-338-848-177 \n Instagram @skyswingbali"
    infoList["address"] = "Jalan Dewi Saraswati No.9, \n Br. Karang Dalem No.1, Bongkasa Pertiwi 1"
    infoList["promotion"] = "COMING SOON"

    return infoList[menuItem]
  }
}
