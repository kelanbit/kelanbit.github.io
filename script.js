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
        otop_result.innerText = Number(str_res_otop).toLocaleString() + ' руб.'
    }
    else {
        otop_area.hidden = true
    }

    if (Number(str_res_gvs > 0)) {

        gvs_area.hidden = false
        gvs_result.innerText = Number(str_res_gvs).toLocaleString() + ' руб.'
    }
    else {
        gvs_area.hidden = true
    }

    if (Number(str_res_odpuo > 0)) {

        odpuo_area.hidden = false
        odpuo_result.innerText = Number(str_res_odpuo).toLocaleString() + ' руб.'
    }
    else {
        odpuo_area.hidden = true
    }

    if (Number(str_res_odpup > 0)) {

        odpup_area.hidden = false
        odpup_result.innerText = Number(str_res_odpup).toLocaleString() + ' руб.'
    }
    else {
        odpup_area.hidden = true
    }
}

function copyFromId(id) {
    const el = document.getElementById(id);
    let value = (el.innerText).replace(' руб.','').replace(' ','')

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