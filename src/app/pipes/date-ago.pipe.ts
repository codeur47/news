import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        return 'Juste maintenant';
      }// less than 30 seconds ago will show as 'Just now'
      const intervals = {
        Annee: 31536000,
        Mois: 2592000,
        Semaine: 604800,
        Jour: 86400,
        Heure: 3600,
        Minute: 60,
        seconde: 1
      };
      let counter;
      // tslint:disable-next-line:forin
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + i + ' environ'; // singular (1 day ago)
          } else {
            return counter + ' ' + i + 's environ'; // plural (2 days ago)
          }
        }
      }
    }
    return value;
  }

}
