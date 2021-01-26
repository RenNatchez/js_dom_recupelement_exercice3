let x = document.getElementsByTagName('div')[0]
console.log(x)

// --1--
let y = x.firstElementChild
console.log(y)

// --2--
let z = x.lastElementChild
console.log(z)

// --3/4--
let w = document.getElementsByTagName('b')[0]
let v = document.getElementsByTagName('i')[0]
console.log(v)
console.log(w)

// --5/6--
console.log(v.parentNode)
console.log(w.parentNode)

// --2--
let a = document.getElementsByTagName('div')[2]
console.log(a.firstElementChild)

