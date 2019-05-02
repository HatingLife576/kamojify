const array = [
"（*＾ワ＾*）",
"(*＾წ＾*)",
"(*꧆▽꧆*)",
"(๑꧆◡꧆๑)",
"（*＾＾*)",
"ヾ(＠^∇^＠)ノ",
"o((*^▽^*))o",
"ヾ(＠⌒ー⌒＠)ノ",
"(＝⌒▽⌒＝)",
"(≡^∇^≡)",
"o(〃＾▽＾〃)o",
"(。・ω・。)",
"ヾ(＾-＾)ノ",
"(❁´◡`❁)",
"˙˚ʚ(´◡`)ɞ˚˙"]

module.exports = function kam(str) {
  var product = str + (" "+array[Math.floor(Math.random()*array.length)]);
  return product;
}
