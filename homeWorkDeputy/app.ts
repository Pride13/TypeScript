import {Deputy, Faction} from './model'

const Vasyl = new Deputy(78, 179, 'Stethem', 'Vasyl', 45, true, 55000);
const Nata = new Deputy(55, 175, 'Bublei', 'Nata', 21, false, 0);

Vasyl.giveBribe();
// console.log(Vasyl);

const factions = new Faction([]);

factions.addDeputy(Vasyl);
factions.addDeputy(Nata);

console.log(factions);
console.log(factions);

// factions.deleteDeputy(Nata);
// console.log(factions);
