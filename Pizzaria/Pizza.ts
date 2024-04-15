import { Sabores } from "./Sabores";

export class Pizza {
    
    tamanho: string;
    sabor: Sabores;
    preco: number;

    constructor(tamanho:string, sabor:Sabores, preco: number){
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.preco = preco;
    }

    infoPizza(): string {
        return `PizzaTamanho: ${this.tamanho}\nSabor: ${this.sabor}\nPreço: R$ ${this.preco}`
        
    }

}