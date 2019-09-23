import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed',
  pure:true
})
export class TimeElapsedPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   let today: any = new Date(); //get current date and time
  //   let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  //   var dateDifference = Math.abs(todayWithNoTime - value) //returns value in miliseconds
  //   const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
  //   var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
  //   var dateCounter = dateDifferenceSeconds / secondsInDay;

  //   return dateCounter;

  // }

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
            return 'Just now';
        const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + i + ' ago'; // singular (1 day ago)
                } else {
                    return counter + ' ' + i + 's ago'; // plural (2 days ago)
                }
        }
    }
    return value;
}

}
