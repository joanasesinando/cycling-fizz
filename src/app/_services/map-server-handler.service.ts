import { Injectable } from '@angular/core';
import {UserBasicInfo} from "./server-handler.service";

@Injectable({
  providedIn: 'root'
})
export class MapServerHandlerService {


  // url :String = "https://cfservertest.cf";
  private url = "http://map.cfservertest.cf";
  public giraURL = this.url + "/get-gira";
  public mobiCascaisURL = this.url + "/get-mobi-cascais";


  constructor() { }

  isLocal() {
    return false;
  }

}
