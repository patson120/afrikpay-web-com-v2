import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  locations = [
    { name: "Maroua", bgColor: "bg-color-grey-200" },
    { name: "Garoua", bgColor: "bg-[#00caf7]" },
    { name: "Ngaoundéré", bgColor: "bg-[#e9e249]" },
    { name: "Bamenda", bgColor: "bg-[#6755b1]" },
    { name: "Douala", bgColor: "bg-[#50c7ce]" },
    { name: "Yaoundé", bgColor: "bg-[#c089c1]" },
  ];

  storeButtons = [
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