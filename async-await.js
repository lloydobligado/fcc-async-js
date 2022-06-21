let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let is_shop_open = true

let order = async () => {
    try {
        await abc
    }

    catch(error){
        console.log("abc doesn't exist", error)
    }

    finally {
        console.log("run code anyways")
    }
}

order().then(() => {
    console.log("ajskfjqifennsd")
})