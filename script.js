function fix() {
    //Write your code here!
    let coconut = document.getElementById("coconut");
    coconut.remove()
    let coast = document.getElementById("coast");
    coast.remove()
    let watermelon = document.getElementById("watermelon");
    watermelon.remove()
    let sunflowers = document.getElementById("sunflowers");
    sunflowers.remove()

    let snowmen = document.createElement("img")
    snowmen.id = "snowmen"
    snowmen.src = "to-add/snowmen.jpg"
    

    let tree = document.createElement("img")
    tree.id = "tree"
    tree.src = "to-add/christmasTree.jpg"

    let stockings = document.createElement("img")
    stockings.id = "stockings"
    stockings.src = "to-add/stockings.jpg"

    let parent = document.getElementById("photos");
    parent.appendChild(snowmen);
    parent.appendChild(tree);
    parent.appendChild(stockings);
}
