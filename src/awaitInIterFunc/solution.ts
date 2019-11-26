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

async function myasunc( asd, qwe ) {
    await sleep( 100 )

    console.log( `processing in async await: ${ asd } - ${ qwe }` )
    console.log( `returning asd ${ asd }` )
    return asd
}

async function extracted() {
    for ( let [ key, value ] of Object.entries( map ) ) {
        console.log( "start" )
        const asdRet = await myasunc( key, value )
        //everything after await is processed after all iterations
        console.log( `asdRet ${ asdRet }` )
        console.log( "finish" )
    }
}

extracted().then( () => {
    console.log( "\ndone." )
} )