import { Pipe, PipeTransform } from '@angular/core';
import {Albom} from "../catalog/catalog.component";

@Pipe({
  name: 'filtDirection'
})
export class FiltDirectionPipe implements PipeTransform {

  transform(alboms: Albom[], direction: number = 0): Albom[]
  {
    if(direction == 0) return alboms;
    return alboms.filter(albom => {return albom.direction == direction })
  }


}
