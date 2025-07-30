import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partnersRowOne = [
    { name: "Eum new", src: "/eum-new-1.png" },
    { name: "Uba", src: "/uba.png" },
    { name: "Expressunion", src: "/expressunion.png" },
    { name: "Dgi", src: "/dgi.png" },
    { name: "Douanes", src: "/douanes.png" },
    { name: "Yoomee", src: "/yoomee-1.png" },
  ];

  partnersRowTwo = [
    { name: "Guce", src: "/guce.png" },
    { name: "Uds", src: "/uds.png" },
    { name: "Minepded", src: "/minepded.png" },
    { name: "Kct", src: "/kct.png" },
    { name: "Eneo", src: "/eneo.png" },
    { name: "Camtel", src: "/camtel-1.png" },
  ];
}