const otop = document.getElementById('otop')
const gvs = document.getElementById('gvs')
const odpuo = document.getElementById('odpuo')
const odpup = document.getElementById('odpup')
const opl = document.getElementById('opl')


const results = document.getElementById('results')


function clean() {
    while (results.firstChild) {
        results.removeChild(results.firstChild)
    }
}

function calc() {
    clean()

    const spaces = new RegExp('\\s', 'g')

    let otopValue = otop.value.replace(spaces, '').replace(',', '.')
    let gvsValue = gvs.value.replace(spaces, '').replace(',', '.')
    let odpuoValue = odpuo.value.replace(spaces, '').replace(',', '.')
    let odpupValue = odpup.value.replace(spaces, '').replace(',', '.')
    let oplValue = opl.value.replace(spaces, '').replace(',', '.')

    let sum = Number(otopValue) + Number(gvsValue) + Number(odpuoValue) + Number(odpupValue)

    if (oplValue > sum) {
        oplValue = sum

        let alert = document.createElement('div')
        alert.className = 'alert alert-warning'
        alert.innerHTML = '<strong>Внимание!</strong> Сумма поступившей оплаты больше суммы общей задолженности и автоматически снижена до размера ДЗ.'
        results.appendChild(alert)
    }

    let services = []

    let str_res_otop = (oplValue * (otopValue / sum)).toFixed(2)
    services.push(Service('Отопление', 'otop', str_res_otop))

    let str_res_gvs = (oplValue * (gvsValue / sum)).toFixed(2)
    services.push(Service('ГВС', 'gvs', str_res_gvs))

    let str_res_odpuo = (oplValue * (odpuoValue / sum)).toFixed(2)
    services.push(Service('ОДПУ осн', 'odpuo', str_res_odpuo))

    let str_res_odpup = (oplValue * (odpupValue / sum)).toFixed(2)
    services.push(Service('ОДПУ %', 'odpup', str_res_odpup))


    draw(services)
}

function draw(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].value > 0) {
            let hr = document.createElement('hr')
            results.appendChild(hr)

            let row = document.createElement('div')
            row.className = 'row'
            results.appendChild(row)

            for (let index = 0; index < array.length; index++) {
                let service = array[index];

                if (service.value > 0) {
                    let col = document.createElement('div')
                    col.className = 'col-lg'
                    row.appendChild(col)

                    let card = document.createElement('div')
                    card.className = 'alert alert-dark'
                    col.appendChild(card)

                    let header = document.createElement('h5')
                    header.className = 'alert-heading'
                    header.innerText = service.name
                    card.appendChild(header)

                    let label = document.createElement('p')
                    label.innerText = service.label
                    card.appendChild(label)

                    let value = document.createElement('p')
                    value.innerText = service.value;
                    value.hidden = true
                    value.id = service.alias + 'Value'
                    card.appendChild(value)

                    let btn = document.createElement('button')
                    btn.className = 'btn btn-secondary'
                    btn.innerText = 'Скопировать значение'
                    btn.onclick = function () {
                        copyFromId(value.id)
                    }
                    card.appendChild(btn)

                }
            }

            break;
        }
    }
}