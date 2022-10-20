/*
TABLEAUX - PRÉPA 4 :  Date valide - version 3
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
- Déclarez deux fonctions : 
	- isBissextile retroune true ou flase selon que l'année est bissextile ou pas
	- isValid retroune true ou flase selon que la date est valide ou pas :
		stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau
		(utilisez isBissextile pour gérer le cas du mois de février)
- Utilisez isValid pour décider si votre date est valide
	avant d'afficher votre message dans la console
*/

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }
    return year % 100 === 0 && year % 400 === 0;
}

function isValidDate(day, month, year) {
    if (month === 2) {
        if (isLeapYear(year) && day <= 29) {
            return true;
        }
        return !isLeapYear(year) && day <= 28;
    }
    return day === months[month - 1];
}

console.log(isValidDate(31, 1, 2019)); // le 31 janvier 2019 est une date valide
console.log(isValidDate(28, 2, 2019)); // le 28 février 2019 est une date valide
console.log(isValidDate(29, 2, 2019)); // le 29 février 2019 n'est PAS une date valide
console.log(isValidDate(29, 2, 2020)); // le 29 février 2020 est une date valide
console.log(isValidDate(30, 2, 2020)); // le 30 février 2020 n'est PAS une date valide
console.log(isValidDate(30, 4, 2020)); // le 30 avril 2020 est une date valide
console.log(isValidDate(31, 4, 2020)); // le 31 avril 2020 n'est PAS une date valide




