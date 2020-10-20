module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    return +str.split('').reverse().join('');
}
