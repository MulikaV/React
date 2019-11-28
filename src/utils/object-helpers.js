
export const updateObjectInArray = (items,objPropName,itemId,newObjProp) => {
  return items.map(u => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObjProp}
    }
    return u;
  })
};