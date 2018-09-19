import * as _ from "lodash";
import * as ts from 'typescript';

export class FunctionGenerator {
    code: string;

    constructor() {
        this.code = this.randomCode();
    }

    getRandomSnippet() {
        let randomWords = [
            '+',
            'a',
            'b',
            'function (a,b)',
            '{',
            '}',
            'return',
            ';',
        ];
        return randomWords[_.random(0, randomWords.length - 1)];
    }

    compile(code) {
        let transpiled = ts.transpile(code, {target: ts.ScriptTarget.ESNext});
        return eval(transpiled);
    }

    generate() {
        while (true) {
            try {
                let func = this.compile(this.code);
                if (func) {
                    return func;
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    private randomCode(): string {
        let count = _.random(4, 12);
        let code = '';
        for (let i = 0; i < count; i++) {
            code += this.getRandomSnippet();
            code += ' ';
        }
        return code;
    }

    enhance() {
        this.code = this.randomCode();
    }
}