function telephoneCheck(str) {
  const re = /(^\d{10}$)|^(1 )?1?(\(\d{3}\)[- ]?)?(\d{3}[- ])?\d{3}[- ]\d{4}$/;
  //const re = /(^\d{10}$)|^(1 )?1?(\(\d{3}\)[- ]?)|(\d{3}[- ])\d{3}[- ]\d{4}$/;
  if(str.match(re) !== null) {
    if (typeof str.match(re) === 'object') {
      if (str.match(re)[0].length >= 10) return true;
    }
    if (typeof str.match(re) === 'string') return true;
  }
  return false;
}



telephoneCheck("5555555555");
