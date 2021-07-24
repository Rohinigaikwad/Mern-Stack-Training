function abc() {
    pqr()
}

function pqr() {
    setTimeout(function () {
        throw error()
    }, 10000)
    lmn()
}
function lmn() {
    //throw error()
    console.log('hi');
}
abc()
