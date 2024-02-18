export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réservé aux utilisateurs déconnectés
["employee"] -> Réservé aux utilisateurs avec le role employee
["admin"] -> Réservé aux utilisateurs avec le role admin
["admin";"employee"]  -> Réservé aux utilisateurs avec le role admin ou employee

*/