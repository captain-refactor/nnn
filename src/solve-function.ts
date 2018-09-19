import {testAddition} from "../tests/simple-addition";
import {FunctionGenerator} from "./function-generator";

function solveAddition() {
    let generator = new FunctionGenerator();
    let epoch = 0;
    while (true) {
        epoch++;
        if (epoch % 50000 === 0) console.log(epoch);
        try {
            let func = generator.generate();
            let result = testAddition(func);
            if (result === 0) {
                return func.toString();
            }
        } catch (e) {

        }
        generator.enhance();
    }
}


console.log(solveAddition());