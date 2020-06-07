function Service(name, alias, value, label) {
    return {
        name: name,
        alias: alias,
        value: value,
        label: parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' руб.'
    }
}