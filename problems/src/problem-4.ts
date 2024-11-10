{

    type Circle = {
        shape: string;
        radius: number;
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number;
    }

    //type guard
    function isCircle(areaShape: Rectangle | Circle): areaShape is Circle {
        return areaShape.shape === 'circle';
    }

    function isRectangle(areaShape: Rectangle | Circle): areaShape is Rectangle {
        return areaShape.shape === 'rectangle';
    }
    //calcualte area of the shape
    let calculateShapeArea = (areaShape: Rectangle | Circle) => {
        if (isCircle(areaShape)) {
            return Math.PI * Math.pow(areaShape.radius, 2);
        } else if (isRectangle(areaShape)) {
            return areaShape.height * areaShape.width;
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
    console.log(circleArea);
    console.log(rectangleArea);

}