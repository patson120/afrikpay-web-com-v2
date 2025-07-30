import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceCards = [
    {
      image: "/th.png",
      title: "Airtime / internet",
      subtitle: "Gagnez du temps, rechargez en ligne !",
      description:
        "Achetez du crédit téléphonique ou offrez-le à vos proches en toute simplicité.\nLa communication est l'oxygène de toute relation.",
    },
    {
      image: "/th--1-.png",
      title: "Factures & Réabonnement",
      subtitle: "Simplifiez-vous la vie, payez en ligne !",
      description:
        "Plus jamais de coupures, payez vos factures et effectuez vos réabonnement canal à temps !\nPaiements et réabonnements simplifiés.",
    },
    {
      image: "/th--2-.png",
      title: "Taxes, impôts, ...",
      subtitle: "Gagnez du temps, payez en ligne !",
      description:
        "Dites adieu aux files d'attente interminables, bonjour au paiement en ligne !\nL'expérience de paiement la plus fluide.",
    },
    {
      image: "/th--6-.png",
      title: "Droits scolaires & Universitaires",
      subtitle: "Paiement sécurisé, satisfaction garantie",
      description:
        "Concentrez-vous sur vos études ! Payez vos droits scolaires en ligne en toute sécurité et gagnez du temps.",
    },
    {
      image: "/th--4-.png",
      title: "Dons & collects",
      subtitle: "Ensemble, faisons bouger les lignes.",
      description:
        "Soutenez les causes qui vous tiennent à cœur car votre geste peut changer plus d'une vie.",
    },
    {
      image: "/th--5-.png",
      title: "Recharge de compte",
      subtitle: "Ne laisse pas ton solde te freiner",
      description:
        "Plus jamais à court d'argent ! Recharge ton compte mobile ou bancaire en quelques secondes.",
    },
  ];
}