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