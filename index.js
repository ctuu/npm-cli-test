
const argv = require('minimist')(process.argv.slice(2))

async function init() {
    console.log(argv)
}

init().catch((e) => {
    console.error(e)
})