import { Component } from '@angular/core';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = `angular-hw v${version}`;

  constructor() {
    console.log(version, this.baseVersion(version));
  }

  private baseVersion(ver: string): string {
    const convertStringToInt = (item: string): number =>
      Number.parseInt(item, 10) || 0;

    const arr = version.split('.');
    return `${convertStringToInt(arr[0])}.${convertStringToInt(
      arr[1]
    )}.${convertStringToInt(arr[2])}`;
  }
}
