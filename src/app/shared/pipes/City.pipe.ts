import { Pipe, PipeTransform } from '@angular/core';

import cities from './cities.json';

@Pipe({
  name: 'city',
  pure: true, 
})
export class CityPipe implements PipeTransform {
  
  transform(value: string, type: string): any {
    const city = cities.find(city => city.name === value) || { 
      id: value,
      name: value,
      long: value,
    };
    switch (type) {
      case 'id': 
      case 'short':
        return city.id;
      case 'name': 
        return city.name;
      case 'long':
      case 'details':
        return city.long;
      default:
        return value;
    }
  }

}
