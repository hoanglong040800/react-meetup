function multiObjToArrObj(multiObj) {
  let arrObj = []

  for (let key in multiObj) {
    let obj = {
      id: key,
      ...multiObj[key],
    }

    arrObj.push(obj)
  }

  return arrObj
}

export { multiObjToArrObj }
