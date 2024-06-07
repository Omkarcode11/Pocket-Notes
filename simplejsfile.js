async function all() {
  console.log("a");
  //   fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((res)=>console.log(res))
  console.log(await fetch("https://fakestoreapi.com/products"));
  console.log("b");
  return 0
}

console.log("before function calling ");
all();
console.log("after function calling ");
