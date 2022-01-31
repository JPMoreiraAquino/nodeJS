function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if(band == "Queen") {
            resolve({
                success: true,
                bandName: band,
                msg: band + 'is the best rock band ever!'
            })
        }else {
            reject({
                success: false,
                msg: "i\'m not so sure!"
            })
        }
    })
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response) {
            resolve('Bohemian Rhapsody by' + response.bandName);
        } else {
            reject('Do you know queen?');
        }
    })
}

// bestRockBand('Queen')
//     .then(response => {
//         console.log('Checking the answer...')
//         return bestRockBand(response)
//     })
//     .then(response => {
//         console.log('Finding the best song...')
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(err.msg)
//     })
    

async function doTheJob() {
        try {
            const bestRockBandResponse = await bestRockBand('Kiss');
            console.log(bestRockBandResponse)
            const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
            console.log(bestRockSongResponse)
        }catch (err) {
            console.log(err.msg)
        }
}

doTheJob()