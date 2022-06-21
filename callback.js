// callback is calling a another function in function

// Example 1
const one = (call_two) => {
    console.log("step 1 complete, please call step 2")
    call_two()
}

const two = () => {
    console.log("step 2")
}

one(two);

// Example 2
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
  
        call_production()
    }, 2000)
}

let production = () => {
    setTimeout(() => {
        console.log("production has started")

        setTimeout(() => {
            console.log("the fruit has been chopped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(() => {
                    console.log("machine was started")
                    
                    setTimeout(() => {
                        console.log(`ice cream was placed on ${stocks.holder[0]}`)
                        
                        setTimeout(() => {
                            console.log(`ice cream toppings was ${stocks.toppings[0]}`)
                            
                            setTimeout(() => {
                                console.log("serve ice cream")
                                
                                
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}

order(0 , production)
