import {CarModel, UserModel} from './model';
import {CarModelEnum} from "./Enum";

function userBuilder(name: string, age: number, car?: CarModel): Partial<UserModel> {
    return {
        name
    }
}

const user = userBuilder('Vasyl', 23, {
    producer: CarModelEnum.Fiat,
    year: 2010
});

let arr: UserModel[] = [];

async function asF(): Promise<number> {
    return setTimeout(()=>{
        return 'Start'
    }, 100)
}

async function r() {
    let number = await asF();

    console.log(number);
}

r();
