
class UI {



    static appendItem(item) {

        let textHtml = `<li class="item">
            <span class="itemName">${item.name}</span>:
            <span class="itemKcal">${item.value}</span>
            Kcal
            <button class="modifyItem" data-id="${item.id}"> Modify Item </button>
        </li>`


        document.querySelector(".itemUl").innerHTML += textHtml
    }




    static clearField() {
        document.querySelector('#kcalField').value = ""
        document.querySelector('#foodField').value = ""
    }


    static updateCounter() {
        let count = 0

        for (let item of items) {
            count += item.value * 1
        }
        console.log(count)

        document.querySelector("#kcalCounter").innerHTML = count
    }






}