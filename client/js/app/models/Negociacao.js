/**
 * Classe modelo das negociações da bolsa. 
 * 
 */
class Negociacao {
    
    /**
     * @data = Data da negociação
     * @quantidade quantidade total
     * @valor valor total
     */
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    
    /**
     * Obtém o volume desta negociação.
     * 
     * Fórmula: quantidade * valor
     */
    get volume() {
        return this._quantidade * this._valor;
    }
    
    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}