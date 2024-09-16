//const groceriesListArr = ['carrots', 'pickles jar', 'apples']

const groceriesListArr = []

groceriesListArr.push({
    itemName: 'carrots',
    itemAmount: 3,
    bought: true
}),

groceriesListArr.push({
    itemName: 'pickels jar',
    itemAmount: 1,
    bought: false
}),

groceriesListArr.push({
    itemName: 'apples',
    itemAmount: 5,
    bought: true
});

//console.log(groceriesListArr);

function printGroceries() {
    let rez = '<ul>';

    // groceriesListArr.forEach(item => {
    //     rez += `<li>
    //         <b>Name: </b> ${item.itemName.toUpperCase()}
    //         <b>Amount: </b> ${item.itemAmount}
    //     </li>`
    // })
    
    rez += '</ul>';
    
    document.body.innerHTML = rez;
}
