
const ItemsCtrl = (function () {

    class Item {
        constructor(name, kcal, id) {
            this.name = name;
            this.kcal = kcal;
            this.id = id;
        }
    }

    const dataState = {
        items: [new Item("steak", 900, 1), new Item("Banana", 300, 2)],
        current_item: null,
        totalCalories: 0,
    }

    // public methods
    return {

        getItems: function () {
            return dataState.items
        },

        insertItem: function (name, kcal, id) {
            dataState.items.push(new Item(name, kcal, id))
            console.log("item added internally in the array")
        },

        logData: function () {
            return dataState
        },

        getTotalCalories: function () {
            let count = 0;
            for (let item of dataState.items) {
                count += item.kcal
            }

            dataState.totalCalories = count
            // Nota una cosa molto sottile nella riga sopra.
            // Anche se questa funzione, getTotalCalories, verrà chiamata
            // sotto, è ancora in grado di modificare il proprio
            // internal state.

            console.log("internal data state is", dataState)
            console.log(count)

            return count
        },

    }

})()


const UICtrl = (function () {


    // States of UICTRL!!
    const UISelectors = {
        foodField: "#foodField",
        kcalField: "#kcalField",
        submitBtn: "#submitBtn",
        containerList: ".itemUl",
        kcalCounter: "#kcalCounter",
    }



    return {

        getFields: function () {
            let name = document.querySelector(UISelectors.foodField).value;
            let kcal = document.querySelector(UISelectors.kcalField).value;

            // Converting to number.
            kcal = kcal * 1

            return { name: name, kcal: kcal }
        },

        addItemUI: function (name, kcal, id) {
            let textHtml = `<li class="item">
                    <span class="itemName">${name}</span>
                    <span class="itemKcal">${kcal}</span>
                    Kcal
                    <button class="modifyItem" data-id="${id}"> Modify Item </button>
            </li>`

            document.querySelector(UISelectors.containerList).innerHTML += textHtml
        },

        getSelectors: function () {
            return UISelectors
        },

        displayItems: function (items) {
            // Requires the list of items.
            // console.log("this is ", this)
            for (let item of items) {
                UICtrl.addItemUI(item.name, item.kcal, item.id)
                // Same as writing 
                // this.addItemUI(item.name, item.kcal, item.id)

            }
        },

        clearFields: function () {
            document.querySelector(UISelectors.foodField).value = "";
            document.querySelector(UISelectors.kcalField).value = "";
        },

        displayTotalCalories: function (calories) {
            document.querySelector(UISelectors.kcalCounter).innerHTML = calories
        }

    }
})()


let App = (function (ItemsCtrl, UICtrl) {


    function loadEventListeners() {
        let selectors = UICtrl.getSelectors()

        // Submitting fields.
        document.querySelector(selectors.submitBtn).addEventListener('click', function (e) {
            e.preventDefault()

            // Getting fields
            let { name, kcal } = UICtrl.getFields()
            //console.log(`${name} and ${kcal}`)

            function generateId() {
                let items = ItemsCtrl.getItems()
                let id = 0;
                if (items.length !== 0) {
                    for (let item of items) {
                        id = Math.max(id, item.id)
                    }
                }
                return id + 1
            }
            let id = generateId()

            // Inserting in the array
            ItemsCtrl.insertItem(name, kcal, id)
            // console.log(`${name}, ${kcal}, ${id} inserted`)

            // Displaying in the UI
            UICtrl.addItemUI(name, kcal, id)


            // Displaying total calories:
            UICtrl.displayTotalCalories(ItemsCtrl.getTotalCalories())

            UICtrl.clearFields()
        })

    }


    return {
        init: function () {


            loadEventListeners()

            // get items
            let items = ItemsCtrl.getItems()
            console.log(items)

            // display items
            UICtrl.displayItems(items)

            // display total calories.
            UICtrl.displayTotalCalories(ItemsCtrl.getTotalCalories())



        }
    }


})(ItemsCtrl, UICtrl)



// Starting the App:
App.init()