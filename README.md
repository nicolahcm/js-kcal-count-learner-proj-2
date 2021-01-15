STRUTTURA:

1) Ogni controller ha il proprio IIFE environment, in cui contiene gli    stati interni. 

2) I controller sono separati modularmente.

3) Tranne App che prende tutti i controller e li mette assieme. 
3.1) App in particolare ha il load event listener.
3.2) Prende in input gli altri controller e li fa comunicare.


STATI INTERNI MODIFICABILI:

4) Gli stati interni di un controller, i.e. ItemsController, 
sono modificabili da delle funzioni che rende pubbliche tramite il return.

4.1) Vedi ad esempio l'insertItem method (per confermare che viene aggiunto usa il logData)

5) Gli stati interni di ItemsController sono modificabili dalle sue funzioni pubbliche, come già detto. 
5.1) Anche se chiamate da un altro IIFE!!! 
Vedi ad esempio la funzione "getTotalCalories" di ItemsController. Questa assegna al proprio state interno: "dataState.totalCalories = count". 
Nonostante chiamiamo questa funzione nell'App IIFE, riesce a modificare lo stesso!(non c'è bisogno di scrivere: "ItemsCtrl.dataState.totalCalories = count")


