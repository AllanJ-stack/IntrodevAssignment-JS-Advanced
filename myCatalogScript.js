var myCatalog, a, b, x = "", y="";
 myCatalog = {
  "product1": [
    {"product1name":"Apple iMac",
     "specs":["27-inch with Retina 5K display", 
     "3.1GHz 6-core 8th-generation Intel Core i5 processor", 
     "Price: $2,998.00"]},
  ]
}
for (a in myCatalog.product1) {
  x += "<h1>" + myCatalog.product1[a].product1name + "</h1>";
  for (b in myCatalog.product1[a].specs) {
    x += myCatalog.product1[a].specs[b] +  "<br>" ;
  }
}
myCatalog2 = {
  "product1": [
    {"product1name":"Apple MacBook Pro",
     "specs":["16-inch with Touch Bar", 
     "2.6GHz 6-core 9th-generation IntelCorei7 processor",
      "Price: $3,405.20"]},
  ]
}
for (a in myCatalog2.product1) {
  y += "<h1>" + myCatalog2.product1[a].product1name + "</h1>";
  for (b in myCatalog2.product1[a].specs) {
    y += myCatalog2.product1[a].specs[b] +  "<br>" ;
  }
}
document.getElementById("demo").innerHTML = x;
document.getElementById("demo2").innerHTML = y;