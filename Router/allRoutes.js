
import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signin","Se connecter","/pages/signin.html"),
    new Route("/forgotPassword","Mot de passe oublié", "/pages/forgotPassword.html"),
    new Route("/contact","Nous contacter","/pages/contact.html"),
    new Route("/employeeAccount", "Espace employés", "/pages/employeeAccount.html"),
    new Route("/adminAccount", "Espace Administrateur", "/pages/adminAccount.html"),
    new Route("/changeService", "Modifier un service", "/pages/changeService.html"),
    new Route("/changeEmployee", "Modifier un employé", "/pages/changeEmployee.html"),
    new Route("/changeVehicle", "Modifier un véhicule", "/pages/changeVehicle.html"),
    new Route("/editPassword", "Changer le mot de passe", "/pages/editPassword.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";

