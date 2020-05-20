const otop = document.getElementById('otop')
const gvs = document.getElementById('gvs')
const odpuo = document.getElementById('odpuo')
const odpup = document.getElementById('odpup')

const opl = document.getElementById('opl')

function calc() {
    let sum = Number(otop.value) + Number(gvs.value) + Number(odpuo.value) + Number(odpup.value)

    let str_res_otop = (opl.value * (otop.value / sum)).toFixed(2)
    let str_res_gvs = (opl.value * (gvs.value / sum)).toFixed(2)
    let str_res_odpuo = (opl.value * (odpuo.value / sum)).toFixed(2)
    let str_res_odpup = (opl.value * (odpup.value / sum)).toFixed(2)

    let result_sum = Number(str_res_otop) + Number(str_res_gvs) + Number(str_res_odpuo) + Number(str_res_odpup)

    alert('отопление: ' + str_res_otop
        + ' руб., гвс: ' + str_res_gvs
        + 'руб., ОДПУ: ' + str_res_odpuo
        + 'руб., ОДПУ%: ' + str_res_odpup + 'руб.')
    

    let delta = (opl.value - result_sum).toFixed(2)

    alert('Погрешность: ' + delta);

}