
import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/signin","Se connecter","/pages/auth/signin.html","/js/auth/signin.js", ["disconnected"]),
    new Route("/forgotPassword","Mot de passe oublié", "/pages/auth/forgotPassword.html",[]),
    new Route("/contact","Nous contacter","/pages/contact.html",[]),
    new Route("/employeeAccount", "Espace employés", "/pages/auth/employeeAccount.html",["employee"]),
    new Route("/adminAccount", "Espace Administrateur", "/pages/auth/adminAccount.html",["admin"]),
    new Route("/editService", "Modifier un service", "/pages/auth/editService.html",["admin"]),
    new Route("/editEmployee", "Modifier un employé", "/pages/auth/editEmployee.html",["admin"]),
    new Route("/editVehicle", "Modifier un véhicule", "/pages/auth/editVehicle.html",["admin","employee"]),
    new Route("/editPassword", "Changer le mot de passe", "/pages/auth/editPassword.html",["admin","employee"]),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Garage V. Parrot";

