
import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/connexion","Connexion","/pages/connexion.html"),
    new Route("/forgotPassword","Mot de passe oublié", "/pages/forgotPassword.html"),
    new Route("/contact","Contact","/pages/contact.html"),
];

 //  new Route('/Espace employé', 'Espace employé', '/pages/espace employé.html');
 //  new Route('/Espace administrateur', 'Espace administrateur', '/pages/espace administrateur.html');
 //  new Route('/Modifier un véhicule', 'Modifier un véhicule', '/pages/modifier un véhicule.html');
 //  new Route('/Modifier un service', 'Modifier un service', '/pages/modifier un service.html');
 //  new Route('/Modifier un employé', 'Modifier un employé', '/pages/modifier un employé.html')];
 //new Route('/Contact','Contact', '/pages/contact.html');


// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";

