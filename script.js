const otop = document.getElementById('otop')
const gvs = document.getElementById('gvs')
const odpuo = document.getElementById('odpuo')
const odpup = document.getElementById('odpup')
const opl = document.getElementById('opl')

const otop_area = document.getElementById('otop_area')
const gvs_area = document.getElementById('gvs_area')
const odpuo_area = document.getElementById('odpuo_area')
const odpup_area = document.getElementById('odpup_area')

const otop_result = document.getElementById('otop_result')
const gvs_result = document.getElementById('gvs_result')
const odpuo_result = document.getElementById('odpuo_result')
const odpup_result = document.getElementById('odpup_result')

const otop_value = document.getElementById('otop_value')
const gvs_value = document.getElementById('gvs_value')
const odpuo_value = document.getElementById('odpuo_value')
const odpup_value = document.getElementById('odpup_value')

const results = document.getElementById('results')


function clean() {
    results.hidden = true
}

function calc() {
    let sum = Number(otop.value) + Number(gvs.value) + Number(odpuo.value) + Number(odpup.value)

    let str_res_otop = (opl.value * (otop.value / sum)).toFixed(2)
    let str_res_gvs = (opl.value * (gvs.value / sum)).toFixed(2)
    let str_res_odpuo = (opl.value * (odpuo.value / sum)).toFixed(2)
    let str_res_odpup = (opl.value * (odpup.value / sum)).toFixed(2)

    let result_sum = Number(str_res_otop) + Number(str_res_gvs) + Number(str_res_odpuo) + Number(str_res_odpup)


    // let delta = (opl.value - result_sum).toFixed(2)

    // alert('Погрешность: ' + delta);    

    
    results.hidden = false
 
    if (Number(str_res_otop > 0)) {

        otop_area.hidden = false
        let temp = parseFloat(str_res_otop).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' руб.'
        otop_result.innerText = temp
        otop_value.innerText = str_res_otop
    }
    else {
        otop_area.hidden = true
    }
 
    if (Number(str_res_gvs > 0)) {

        gvs_area.hidden = false
        let temp = parseFloat(str_res_gvs).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' руб.'
        gvs_result.innerText = temp
        gvs_value.innerText = str_res_gvs
    }
    else {
        gvs_area.hidden = true
    }

    if (Number(str_res_odpuo > 0)) {

        odpuo_area.hidden = false
        let temp = parseFloat(str_res_odpuo).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' руб.'
        odpuo_result.innerText = temp
        odpuo_value.innerText = str_res_odpuo
    }
    else {
        odpuo_area.hidden = true
    }

    if (Number(str_res_odpup > 0)) {

        odpup_area.hidden = false
        let temp = parseFloat(str_res_odpup).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' руб.'
        odpup_result.innerText = temp
        odpup_value.innerText = str_res_odpup
    }
    else {
        odpup_area.hidden = true
    }
}

function copyFromId(id) {
    const el = document.getElementById(id);
    let value = (el.innerText).replace('.', ',');

    copyToClipboard(value);
}

function copyToClipboard(value) {
    const cb = document.createElement('textarea');
    document.body.appendChild(cb);
    cb.setAttribute('id', 'tempboard');
    document.getElementById('tempboard').value = value;
    cb.select();
    document.execCommand('copy');
    document.body.removeChild(cb);
}