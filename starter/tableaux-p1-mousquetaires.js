/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
Ecrivez un programme qui :
1. crée un tableau nommé mousquetaires contenant les noms des trois mousquetaires,
	Athos, Porthos et Aramis ;
2. affiche le nom de chaque mousquetaire à l'aide d'une boucle for
	(précédé du texte "Voici les Trois Mousquetaires :") ;
3. ajoute au tableau le mousquetaire d'Artagnan ;
4. affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthode forEach()
	(précédé du texte "Ils sont quatre à présent :") ;
5. supprime Aramis du tableau ;
6. affiche le nom de chaque mousquetaire avec une boucle for-of
	(précédé du texte "Le pauvre Aramis est mort…")
*/

const mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les Trois Mousquetaires :");

for (let i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("Artagnan");

console.log("Ils sont quatre à présent :")

mousquetaires.forEach(mousquetaire => {
    console.log(mousquetaire);
})

mousquetaires.splice(2,1);

console.log("Le pauvre Aramis est mort…");

for (const mousquetaire of mousquetaires) {
    console.log(mousquetaire);
}




