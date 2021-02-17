class Service{

    constructor(name, alias, value){
        this.name = name,
        this.alias = alias,
        this.value = value,
        this.label = parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' руб.'
    }
}