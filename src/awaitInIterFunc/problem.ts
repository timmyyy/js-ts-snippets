import _ = require("lodash")
const sleep = require('util').promisify(setTimeout)

const map = {
    asd1: "qwe1",
    asd2: "qwe2",
    asd3: "qwe3",
    asd4: "qwe4",
    asd5: "qwe5",
    asd6: "qwe6",
    asd7: "qwe7",
    asd8: "qwe8",
    asd9: "qwe9",
    asd: "qwe"
}

async function myawait( asd, qwe ) {
    await sleep(100)
    //everything after await is processed after all iterations
    console.log( `processing in async await: ${ asd } - ${ qwe }` )
    console.log(`returning asd ${asd}`)
    return asd
}

_( map ).forOwn( async ( asd, qwe ) => {
    console.log("start")
    const asdRet = await myawait( asd, qwe )
    //everything after await is processed after all iterations
    console.log(`asdRet ${asdRet}`)
    console.log("finish")
} )