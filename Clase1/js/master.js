(function(d){
    d.__proto__.menu = {
        articulo : (ev) => {
            console.log(ev);
            d.getElementById("main_frame").src = "views/articulo.html";
            return false;
        },
        civic : (ev) => {
            console.log(ev);
             d.getElementById("main_frame").src = "views/civic.html";
       },
        responsive : (ev) => {
            console.log(ev);
        },
        triangulo : (ev) => {
            console.log(ev);
        }
    };
})(document)

