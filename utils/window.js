function documentUndefined () {
  if(typeof document === 'undefined'){
    return true
  } else {
    return false
  }
}

function windowUndefined () {
  if(typeof window === 'undefined'){
    return true
  } else {
    return false
  }
}

module.exports = { documentUndefined, windowUndefined }
