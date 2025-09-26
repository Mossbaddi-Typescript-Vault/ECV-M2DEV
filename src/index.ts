// let nomvar: <type> = valeur;
let age: number = 30;
let nom: string = "Jean";
let estActif: boolean = true;

age = 31; // OK


let scores: string[] = ["10", "20", "30"];
let scores2: number[] = [10, 20, 30];


let user: [string, number] = [nom, age];


interface Personne {
    nom: string;
    age: number;
    estActif: boolean;
}

let personne: Personne = {
    nom: "Alice",
    age: 25,
    estActif: false
};

// function nomFonction(parametre: type): typeRetour { ... }

function saluer(nom: string): string {
    return `Bonjour, ${nom}!`;
    // return "Bonjour, " + nom + "!";
}



let status: "actif" | "inactif" | "en attente";

status = "actif"; // OK

let theme: "dark" | "light";


class PersonneClass implements Personne  {
    nom: string;
    age: number;
    estActif: boolean = true;

    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    saluer(): string {
        return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
    }

    toggleActif(): void {
        this.estActif = !this.estActif;
    }
}

let personneInstance = new PersonneClass("Bob", 28);
console.log(personneInstance.saluer());



function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);


let userScores: Record<number, string> = {
    1: "Alice",
    2: "Bob",
    3: "Charlie"
};


let x: any = "Hello";
let y: unknown = 42;


enum Role {
    Admin,
    User,
    Guest
}

let userRole: Role = Role.Admin;
