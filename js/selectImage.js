const folderPath = "../assets/images/pictures"

const images = [
    {
        id: 0,
        source: `${folderPath}/daniel-octavian-Wzj7rBxxMaw-unsplash.jpg`
    },
    {
        id: 1,
        source: `${folderPath}/hugo-brightling--Np0fy-xMPg-unsplash.jpg`
    },
    {
        id: 2,
        source: `${folderPath}/luke-miller-s3X42VyFsHU-unsplash.jpg`
    },
    {
        id: 3,
        source: `${folderPath}/marek-piwnicki-1m8WzyEIFio-unsplash.jpg`
    },
    {
        id: 4,
        source: `${folderPath}/maurits-bausenhart-42Ocfqp4FAY-unsplash.jpg`
    },
    {
        id: 5,
        source: `${folderPath}/tiago-ferreira-lOOMSNe3Vng-unsplash.jpg`
    },
];

async function sortNum(exceptionItem) {
    let randomNum = 0;

    while (true) {
        randomNum = Math.floor(Math.random() * ((images.length - 1) - 0 + 1)) + 0;

        if(randomNum !== exceptionItem || exceptionItem) break;
    }

    return randomNum;
}

export const profilePicture = {
    async getRandomImage(currentPhotoId) {
        return images[await sortNum(currentPhotoId)];
    }
};
