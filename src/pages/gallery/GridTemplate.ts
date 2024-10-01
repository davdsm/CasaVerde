const gridTemplate = {
    "1-row": 2,
    "2-row": 3,
    "3-row": 5,
    "4-row": 7,
    "6-row": 10,
    "7-row": 12,
};

const division = (numberOfImages: number, numberOfRows: 1 | 2 | 3 | 4 | 6 | 7) => {
    return Math.trunc(numberOfImages / gridTemplate[`${numberOfRows}-row`])
};

const GridCalculator = (numberOfImages: number): { rows: number, images: number, imagesLeft: number } => {

    let rows: number = 4;
    let images: number = gridTemplate["4-row"];

    if (numberOfImages <= 12) {

        if ( numberOfImages <= gridTemplate["1-row"] ) {
            images = gridTemplate["1-row"];
            rows = 1;
        }
        else if ( numberOfImages <= gridTemplate["2-row"] ) {
            images = gridTemplate["2-row"];
            rows = 2;
        }
        else if ( numberOfImages <= gridTemplate["3-row"] ) {
            images = gridTemplate["3-row"];
            rows = 3;
        }
        else if ( numberOfImages <= gridTemplate["4-row"] ) {
            images = gridTemplate["4-row"];
            rows = 4;
        }
        else if ( numberOfImages <= gridTemplate["6-row"] ) {
            images = gridTemplate["6-row"];
            rows = 6;
        }
        else if ( numberOfImages <= gridTemplate["7-row"] ) {
            images = gridTemplate["7-row"];
            rows = 7;
        }
    }
    else {
        if ( division(numberOfImages, 7) > 0 ) {
            images = gridTemplate["7-row"];
            rows = 7;
        }
        else if ( division(numberOfImages, 6) > 0 ) {
            images = gridTemplate["6-row"];
            rows = 6;
        }
        else if ( division(numberOfImages, 4) > 0 ) {
            images = gridTemplate["4-row"];
            rows = 4;
        }
    }

    return {
        rows,
        images,
        imagesLeft: numberOfImages - images,
    };
};

const GridTemplate = (numberOfImages: number): { rows: number[], images: number[] } => {

    let gridRows: number[] = [];
    let gridImages: number[] = [];

    while (numberOfImages > 0) {
        const { images, rows, imagesLeft } = GridCalculator(numberOfImages);
        numberOfImages = imagesLeft;
        gridRows = [...gridRows, rows];
        gridImages = [...gridImages, images];
    }

    return { 
        rows: gridRows,
        images: gridImages
    };
};

export default GridTemplate;