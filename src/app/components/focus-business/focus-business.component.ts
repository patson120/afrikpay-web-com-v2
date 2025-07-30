import { Component } from '@angular/core';

@Component({
  selector: 'app-focus-business',
  templateUrl: './focus-business.component.html',
  styleUrls: ['./focus-business.component.scss']
})
export class FocusBusinessComponent {
  stats = [
    {
      value: "100%",
      label: "Satisfaction",
    },
    {
      value: "24h/7j",
      label: "Support",
    },
    {
      value: "5k+",
      label: "Transac. / j",
    },
  ];
}