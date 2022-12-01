"use strict";

const cakeUl = document.querySelector("#cake-table-ul");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    data.cakes.forEach((cake) => {
      // console.log(cake);

      cakeUl.insertAdjacentHTML(
        "beforeend",
        `<li class="cake-table--li">
                <div class="cake-table--cake-wrapper">
                    <h3 class="cake-table--h3 cake-table--category-mobile show-on-mobile"> kage: </h3> 
                    <h4 class="cake-table--h4 cake-table--li-left" >
                        ${cake.name}
                    </h4> 
                </div>
                <div class="cake-table--cake-wrapper">
                    <h3 class="cake-table--h3 cake-table--category-mobile show-on-mobile"> fedt: </h3> 
                    <h4 class="cake-table--h4" >
                        ${cake.fat}
                    </h4> 
                </div>
                <div class="cake-table--cake-wrapper">
                    <h3 class="cake-table--h3 cake-table--category-mobile show-on-mobile"> protein: </h3> 
                    <h4 class="cake-table--h4" >
                        ${cake.protein}
                    </h4> 
                </div>
                <div class="cake-table--cake-wrapper">
                    <h3 class="cake-table--h3 cake-table--category-mobile show-on-mobile"> kulhydrat: </h3> 
                    <h4 class="cake-table--h4" >
                        ${cake.carbohydrates}
                    </h4> 
                </div>
            </li>`
      );
    });
  });
