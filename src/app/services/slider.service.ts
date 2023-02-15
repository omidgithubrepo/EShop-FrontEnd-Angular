// /*
// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {BehaviorSubject, Observable} from 'rxjs';
// import {HomeSliderResponse} from '../DTOs/Sliders/HomeSliderResponse';
// import {Slider} from '../DTOs/Sliders/Slider';
// import {DomainName} from '../Utilities/PathTools';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SliderService {
//
//   private homeSliders: BehaviorSubject<Slider[]> = new BehaviorSubject<Slider[]>(null);
//   private domain = DomainName;
//
//   constructor(
//     private http: HttpClient
//   ) {
//   }
//
//   public GetSliders(): Observable<HomeSliderResponse> {
//     return this.http.get<HomeSliderResponse>('/slider/GetActiveSliders');
//   }
//
//   public getCurrentSliders(): Observable<Slider[]> {
//     return this.homeSliders;
//   }
//
//   public setCurrentSliders(sliders: Slider[]) {
//     this.homeSliders.next(sliders);
//   }
// }
// */
