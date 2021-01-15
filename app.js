
let items = []




document.querySelector("#submitBtn").addEventListener('click', function (e) {


    e.preventDefault();
    let name = document.querySelector('#foodField').value
    let value = document.querySelector('#kcalField').value
    let id = getId()

    function getId() {
        // Finding the id: from items we look for each Item inside it and its id.
        // We store the id in the array below and then compute the max.
        let ids = []
        for (let item of items) {
            ids.push(item.id)
        }
        let id = 0;
        if (ids.length !== 0) {
            id = Math.max(...ids) + 1
        }
        return id
    }



    let item = new Item(name, value, id)

    // Pushing the item LOGICALLY 
    items.push(item)

    // Displaying the item VISUALLY
    UI.appendItem(item)

    // Clearing Fields.
    UI.clearField()

    // UpdateCounter
    UI.updateCounter()


    console.log(items)
})




let state = "normal"