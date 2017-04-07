export const multiply = (a,b) => a * b;

export const curriedMultiply = (x: number) => (y: number) => x * y;

export const double = curriedMultiply(2);

export const updateStateAndVisibility = obj => state => visibility => Object.assign({}, obj, state, visibility);

export function compose(args, funct) {
    return args.reduce((a, b) => funct(a)(b));
}

export const add = (a) => (b) => a + b;

export const fork = (join, func1, func2) => (val) => join(func1(val), func2(val));

export const divide = (a, b) => a / b;

export const sum = (args) => compose(args, add);

export const count = (items) => items.length;

export const repeat = (times, funct, initial) => times > 0 ? repeat(times - 1, funct,
    funct(initial)) : initial;


