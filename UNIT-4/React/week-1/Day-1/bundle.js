(() => {
  var o = {
      919: (o) => {
        o.exports = () => (console.log(6), 2);
      },
    },
    r = {};
  function e(t) {
    var s = r[t];
    if (void 0 !== s) return s.exports;
    var n = (r[t] = { exports: {} });
    return o[t](n, n.exports, e), n.exports;
  }
  (() => {
    let o = e(919)();
    console.log("res:", o);
  })();
})();
