export type Alphanumeric = string | number;

export function print(value: Alphanumeric) {
    console.log(value);
}

export type Empty = void;

export type Tree = Node | Leaf;

export class Leaf {
    constructor(public value: Alphanumeric | Empty){}

    toString(): string {
        return 'Leaf: ' + this.value;
    }
}
export class Node {
    constructor(public leftChild: Tree, public rightChild: Tree){}

    toString(): string{
        return 'Node';
    }
}


export interface Plugable {
    plug : () => void;
}

export interface Updatable {
    update : () => void;
}

export type UpdatablePlugin = Plugable & Updatable;

export class PluginManager {
    installPlugin(plugin: UpdatablePlugin){
        plugin.plug();
    }

    updatePlugin(plugin: UpdatablePlugin){
        plugin.update();
    }
}

export class MyPlugin implements Plugable, Updatable {
    constructor(public name: string){}

    plug() {
        console.log("Installing plugin:" + this.name);
    }

    update() {
        console.log("Updating plugin:" + this.name);
    }
}

export function isPlugable(item: (Plugable | Updatable)) : item is Plugable {
    return (<Plugable>item).plug !== undefined;
}

export function isUpdatable(item: (Plugable | Updatable)) : item is Updatable {
    return (<Updatable>item).update !== undefined;
}

export function getString<T>(input : T) : string {
    return JSON.stringify(input);
}

export function getFirst<T>(items: T[]) : T {
    return items[0];
}

export interface Cache<E> {
    registerItem(items : E[]) : void;
}

export class MySingleton<T> {
    constructor(private _instance: T) {}

    get instance() : T {
        return this._instance;
    }
}


export class Person {
    constructor(public name: string) {}
}

export type Constructor<T> = new(...args: any[]) => T;

export function Tagged<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
        _tag: string;
        constructor(...args: any[]) {
            super(...args);
            this._tag = "";
        }
    }
}

export class Customer extends Tagged(Person) {
    accountBalance: number;
}
