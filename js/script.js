const otop = document.getElementById('otop')
const gvs = document.getElementById('gvs')
const odpuo = document.getElementById('odpuo')
const odpup = document.getElementById('odpup')
const opl = document.getElementById('opl')


const renderBody = document.getElementById('renderBody')


function clean() {
    while (renderBody.firstChild) {
        renderBody.removeChild(renderBody.firstChild)
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

    if (oplValue > sum && sum > 0) {
        oplValue = sum

        let alert = document.createElement('div')
        alert.className = 'alert'
        alert.innerHTML = '<strong>Внимание!</strong> Сумма поступившей оплаты больше суммы общей задолженности и автоматически снижена до размера ДЗ.'
        alert.id='alert'
        renderBody.appendChild(alert)
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
            renderBody.appendChild(hr)

            let row = document.createElement('div')
            row.className = 'row'
            row.id = 'results'
            renderBody.appendChild(row)

            for (let index = 0; index < array.length; index++) {
                let service = array[index];

                if (service.value > 0) {
                    let col = document.createElement('div')
                    col.className = 'col-lg'
                    row.appendChild(col)

                    let card = document.createElement('div')
                    card.className = 'alert'
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
                    btn.className = 'btn btn-block'
                    btn.innerText = 'Скопировать значение'
                    btn.onclick = function () {
                        copyFromId(value.id)
                        changeBtnText(btn, 'Скопировать значение', 'Скопировано!', 3500)
                    }
                    card.appendChild(btn)

                }
            }

            break;
        }
    }
}

function changeBtnText(button, before, after, timeout) {
    button.innerText = after
    setTimeout(function (x) {
        button.innerText = before
    }, timeout)
}
