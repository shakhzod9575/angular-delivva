import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public L:any = null;
  public Routing:any = null

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.L = require('leaflet');
      this.Routing = require('leaflet-routing-machine');
    }
  }
}
