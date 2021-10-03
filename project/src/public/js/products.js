function sort(x) {
    let menu = document.getElementById("type");
    menu.addEventListener("change", generateData);
  
    function generateData(event) {
      if (menu.value == "1") {
        window.location.href = `/products/sorthtol/${x}/`;
      } else if (menu.value == "2") {
        window.location.href = `/products/sortltoh/${x}/`;
      } else if (menu.value == "3") {
        window.location.href = `/products/sort/${x}/`;
      } else if (menu.value == "4") {
        window.location.href = `/products/type/all/`;
      }
    }
  }
  
  sort("tshirt");



function filter(x) {
    console.log("sonu")
    window.location.href = `/products/type/${x}`;
}
function brand_filter(y) {
    console.log("monu")
    window.location.href = `/products/brand/${y}`
}

function changePage(x) {
    window.location.href = `/products2/${x}`;
}

