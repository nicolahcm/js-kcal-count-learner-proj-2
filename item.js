
class Item {
    constructor(name, value, id) {
        this.name = name;
        this.value = value;
        this.id = id
    }

    // print() {
    //     console.log(`name is ${this.name} and value is ${this.value}`)
    // }

    returnHtml() {
        return `<li class="item">
                    <span class="itemName">${this.name}</span>
                    <span class="itemKcal">${this.value}</span>
                    Kcal
                    <button class="modifyItem" data-id="${this.id}"> Modify Item </button>
                </li>`

    }

}












