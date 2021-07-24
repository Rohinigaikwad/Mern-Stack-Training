const mobiles = ['android', 'apple', 'windows', 'linux', 'symbian', 'palm']

function traditionalFor() {
    for (let i = 0; i < mobiles.length; i++)
    {
        console.log(mobiles[i])
    }
}

function forEachLoop() {
    mobiles.forEach((el, ind) => console.log(`Element is ${el} Index is ${ind}`))
}

function find() {
    mobiles.forEach(el => {
        if (el.length > 4) console.log(el)
    }) //iterate over each element of the array & display each element of the array

    const dt = mobiles.find(el => el.length > 4)
    console.log('find', dt) //get the value of the 1st ele in the array

    const it = mobiles.findIndex(el => el.length > 4)
    console.log('find Index', it) //get the index of the 1st element in the array


    const filMbsLn = mobiles.filter(el => el.length > 4) //if not satisfy the condition return []array i.e el.length<4
    console.log('filter', filMbsLn) //filter all ele that has length > 4

    const filMbsNm = mobiles.filter(el => el.includes('w')) //filter only the ele that has 'w' & return
    console.log('filter', filMbsNm)

    const test = mobiles.every(el => el.includes('w')) //if every ele satisfy the condition return true ,if not one of the ele-false
    console.log(test) //in this case returns false bcoz not every ele includes 'w',if we pass '' return true

    const testAny = mobiles.some(el => el.length > 4) //at least one ele satisfy the condition return true ,if not any-false
    console.log(testAny)
}

function map() {
    const onlyMap = mobiles.map(el => [el.toUpperCase()])
    console.log(onlyMap)

    const flMap = mobiles.flatMap(el => [el.toUpperCase()])
    console.log(flMap)
}

map()
find()

