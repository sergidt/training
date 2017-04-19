import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fp-2',
    template: `<h2 class="subtitle">Function Composition and High Order Functions</h2>
    <div [innerHtml]="htmlContent"></div>`
})
export class Fp2Component implements OnInit {

    htmlContent = `<pre><code>
//Compose function

//High Order Functions

</code>
</pre>`;

    ngOnInit() {
        console.clear();

        console.log(compose([1,2,3,4,5,6], add));
        console.log(mean([10, 20, 30, 40]));

        const flter = (a) => a == 'a';

        const num = <number>NaN;

        console.log(num);
        console.log([2, 1, 'a', true, 2].filter(Number));

        console.log(!!NaN);
    }
}

function compose(args, funct) {
    return args.reduce((acc, curr) => funct(acc)(curr));
}


const add = (a) => (b) => a + b;

////////

const fork = (join, func1, func2) => (val) => join(func1(val), func2(val));

const divide = (a, b) => a / b;

const count = (items) => items.length;

const sum = (args) => compose(args, add);

const mean = fork(divide, sum, count);