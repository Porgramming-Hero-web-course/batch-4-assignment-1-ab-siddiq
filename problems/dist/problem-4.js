"use strict";
{
    //type guard
    function isCircle(areaShape) {
        return areaShape.shape === 'circle';
    }
    function isRectangle(areaShape) {
        return areaShape.shape === 'rectangle';
    }
    //calcualte area of the shape
    let calculateShapeArea = (areaShape) => {
        if (isCircle(areaShape)) {
            return Math.PI * Math.pow(areaShape.radius, 2);
        }
        else if (isRectangle(areaShape)) {
            return areaShape.height * areaShape.width;
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
    console.log(circleArea);
    console.log(rectangleArea);
}
