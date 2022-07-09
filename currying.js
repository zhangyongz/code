function currying(fn) {
  return function (...arg) {
    if (arg.length >= fn.length) {
      return fn(...argArr)
    } else {
      return (...arg2) => currying(fn)(...arg, ...arg2)
    }
  }
}

function currying(fn) {
  let argArr = []
  function excuter() {
    argArr = argArr.concat(arguments)
    if (argArr.length >= fn.length) {
      fn(argArr)
    } else {
      return excuter
    }
  }
  return excuter
}