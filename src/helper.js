const scinotation = (s) => {
    s += '';
    let a = [];
    let tem = [];
    if(/\./.test(s)){
        tem = s.split('.')
    }else{
        tem.push(s)
    }
    for(let i = tem[0].length; i > 0; i -= 3){
      if(i-3 > 0){
        a.push(tem[0].substring(i-3, i))
      }else{
        a.push(tem[0].substring(0, i))
      }
    }

    return a.reverse().join(',')+(tem[1]||'')
}

module.exports = {
    scinotation
}
