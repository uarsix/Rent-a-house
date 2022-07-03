export default (city) => {
  // 字母数组
  const alphabet = Array.from(new Array(26), (_, index) => String.fromCharCode(65 + index))
  const obj = {}
  alphabet.forEach((item) => {
    obj[item] = []
    // 遍历后台数据嵌套数组
    city.forEach(item1 => {
      if (item1.short[0].toUpperCase() === item) {
        obj[item].push(item1)
      }
    })
  })
  return obj
}
