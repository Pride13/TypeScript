import {Deputy} from "./Deputy.model";

export class Faction {
    listOfDeputy: Deputy[] = [];

    constructor(listOfDeputy: Deputy[] = []) {
        this.listOfDeputy = listOfDeputy;
    }

    addDeputy(obj: Deputy) {
        this.listOfDeputy.push(obj)
    }
    // deleteDeputy(deputyToDelete: DeputyModel) {
    //     const deleteDep = this.listOfDeputy.findIndex((dept: DeputyModel) => {
    //         return deputyToDelete.name == dept.name && deputyToDelete.surname == dept.surname
    //     });
    //
    //     for (let i = 0; i < this.listOfDeputy.length; i++) {
    //         if (this.listOfDeputy[i] === deleteDep) {
    //             this.listOfDeputy.splice(i, 1);
    //         }
    //     }
    // }

    // deleteDeputy(deputyToDelete: Deputy) {
    //         const indexToDelete = this.listOfDeputy.findIndex((dept: Deputy) => {
    //             return deputyToDelete.name == dept.name && deputyToDelete.surname == dept.surname
    //         });
    //
    //         this.listOfDeputy.splice(indexToDelete, 1);
    //     }

}