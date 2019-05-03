// The array of Kamoji randomly generated
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
  "˙˚ʚ(´◡`)ɞ˚˙",
  "(´｡• ω •｡`)",
  "o(>ω<)o",
  "♡(｡- ω -)",
  "(*ﾉωﾉ)",
  "	~ヾ(・ω・)"
]


// How it choses what it uses (randomly)
module.exports = function kam(str) {
  var product = str + (" "+array[Math.floor(Math.random()*array.length)]);
  return product;
}
