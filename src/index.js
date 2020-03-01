module.exports = function reverse(n) {
    n = String(Math.abs(n));
    let r = '';
    for (let i = (n.length - 1); i >= 0; i--) {
        r += n[i];

    }
    return +r;
}
