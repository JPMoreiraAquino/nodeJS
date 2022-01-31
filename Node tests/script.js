const betterDeveloper = 'Bruno'

const rightName = "zezinho da padaria"


function whoIsBetterCallback(callback, errorCallback) {

    return new Promise((resolve, reject) => {

        
        if (betterDeveloper != rightName && betterDeveloper != 'Gabriel' ) {
            reject({
                name: 'this is wrong',
                message: betterDeveloper + '? really'
            })
        }else {
            resolve({
                name: betterDeveloper,
                message: betterDeveloper + ' CDFs are the best!'
            })
        }
    })
}

whoIsBetterCallback()
    .then((result) => {    
    console.log(result.name + '? Yeah! ' + result.message)
}) .catch((error) => {
    console.log(error.name + " " + error.message)
})