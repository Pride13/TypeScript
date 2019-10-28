import {Deputy, Faction, VerhovnaRada} from './model'

const Vasyl = new Deputy(78, 179, 'Stethem', 'Vasyl', 45, true, 55000);
const Natalia = new Deputy(55, 175, 'Ivanova', 'Nata', 21, false, 0);
const Ivan = new Deputy(88, 189, 'Petriv', 'Ivan', 27, true, 6500);
const Olena = new Deputy(49, 170, 'Karpa', 'Olena', 24, true, 150600);
const Roman = new Deputy(88, 186, 'Kum', 'Roman', 21, false, 0);

Vasyl.giveBribe();

const factions = new Faction([]);
factions.addDeputy(Vasyl);
factions.addDeputy(Natalia);
factions.addDeputy(Olena);
factions.showTheBiggestBriber();
factions.totalBribe();

console.log(factions);

const factions1 = new Faction([]);
factions1.addDeputy(Ivan);

console.log(factions1);

const factions2 = new Faction([]);
factions2.addDeputy(Roman);
console.log(factions2);

const Radykalna = new VerhovnaRada([]);
Radykalna.addFactions(factions);

console.log(Radykalna);

