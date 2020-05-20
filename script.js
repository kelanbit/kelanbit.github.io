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
        otop_result.innerText = str_res_otop + ' руб.'
    }
    else {
        otop_area.hidden = true
    }

    if (Number(str_res_gvs > 0)) {

        gvs_area.hidden = false
        gvs_result.innerText = str_res_gvs + ' руб.'
    }
    else {
        gvs_area.hidden = true
    }

    if (Number(str_res_odpuo > 0)) {

        odpuo_area.hidden = false
        odpuo_result.innerText = str_res_odpuo + ' руб.'
    }
    else {
        odpuo_area.hidden = true
    }

    if (Number(str_res_odpup > 0)) {

        odpup_area.hidden = false
        odpup_result.innerText = str_res_odpup + ' руб.'
    }
    else {
        odpup_area.hidden = true
    }

}