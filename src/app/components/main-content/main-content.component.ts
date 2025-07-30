import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  downloadOptions = [
    {
      name: "PlayStore",
      icon: "/playstore-1.png",
      iconWidth: "w-[40.63px]",
      iconHeight: "h-[40.63px]",
    },
    {
      name: "AppStore",
      icon: "/app-store-1.png",
      iconWidth: "w-[36.17px]",
      iconHeight: "h-[36.17px]",
    },
  ];
}