function addToLocalStorage(arrayName, objToAdd) {
  let array = JSON.parse(localStorage.getItem(arrayName)) || [];
  array.push(objToAdd);
  localStorage.setItem(arrayName, JSON.stringify(array));
}
