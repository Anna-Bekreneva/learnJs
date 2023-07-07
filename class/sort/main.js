const items = document.querySelectorAll('[data-order]')
let itemsArray = []

for (let i = 0; i < items.length; i++) {
    itemsArray.push(items[i])
}

itemsArray.sort((a, b) => {
    return a.getAttribute('data-order') - b.getAttribute('data-order')
})

console.log(itemsArray)