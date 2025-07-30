import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  partnerLogosRow1 = [
    { name: "Blackwhite", src: "/blackwhite.png" },
    { name: "Reloadly", src: "/reloadly.png" },
    { name: "Webtosms", src: "/webtosms.png" },
    { name: "Corlang", src: "/corlang.png" },
    { name: "Crifat", src: "/crifat.png" },
    { name: "Yoomee", src: "/yoomee-1.png" },
  ];

  partnerLogosRow2 = [
    { name: "Cellukant", src: "/cellukant.png" },
    { name: "Iccsoft", src: "/iccsoft.png" },
    { name: "Wouritv noborders", src: "/wouritv-noborders.png" },
    { name: "Tagpay", src: "/tagpay.png" },
    { name: "Bekeymarket", src: "/bekeymarket.png" },
    { name: "Camtel", src: "/camtel-1.png" },
  ];
}