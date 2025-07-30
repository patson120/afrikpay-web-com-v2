import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkItems = [
    { text: "FAQ", href: "#" },
    { text: "Documentation de l'API", href: "#" },
    { text: "Conditions d'utilisation", href: "#" },
    { text: "Politique de confidentialité", href: "#" },
  ];

  contactInfo = [
    { title: "Localisation", isBold: true },
    { text: "Cameroun - Douala - Logpom" },
    { text: "+237 658 880 708 (Whatsapp)" },
    {
      text: "contact@afrikpay.com",
      href: "mailto:contact@afrikpay.com",
      isLink: true,
    },
  ];
}