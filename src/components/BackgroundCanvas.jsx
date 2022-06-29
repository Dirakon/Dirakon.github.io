import React, {useEffect, useState} from "react";
import './../styles/BackgroundCanvas.css'
import {loadCanvasSprite} from "../scripts/FileLoader";

let frame = 0;
let getActualHeight;
const SCALE = 1;
const OFFSET = 80;
let shipImage = new Image();
let initialHeight = null;

let currentPattern = null;

function randomRangeF(min, max) {
    return Math.random() * (max - min) + min
}

function generateRandomPattern() {
    let initialRandomPosition = null;
    let randomSide = Math.round(Math.random() * 3);
    const wallOffset = 200;
    const leftWall = -wallOffset;
    const rightWall = window.innerWidth + wallOffset;
    const topWall = -wallOffset;
    const downWall = getActualHeight() + wallOffset;
    switch (randomSide) {
        case 0: // Left
            initialRandomPosition = [
                leftWall,
                randomRangeF(topWall, downWall)
            ]
            break;
        case 1: // Right
            initialRandomPosition = [
                rightWall,
                randomRangeF(topWall, downWall)
            ]
            break;
        case 2: // Top
            initialRandomPosition = [
                randomRangeF(leftWall, rightWall),
                topWall
            ]
            break;
        case 3: // Down
            initialRandomPosition = [
                randomRangeF(leftWall, rightWall),
                downWall
            ]
            break;
        default:
            console.log(randomSide)
    }
    return {
        startingFrame: frame,
        initialPosition: initialRandomPosition,
        moveFunction: generateRandomMoveFunction()
    }
}

function generateRandomMoveFunction() {
    let [linearOne, linearTwo] = normalized([randomRangeF(-10, 10), randomRangeF(-10, 10)])
    let speed = randomRangeF(5, 15)
    linearOne *= speed
    linearTwo *= speed

    let cosMult = randomRangeF(-100, 100), inCosDiv = randomRangeF(10, 19)
    let sinMult = randomRangeF(-100, 100), inSinDiv = randomRangeF(10, 19)

    let quadraticMult1 = randomRangeF(-0.05, 0.05), quadraticMult2 = randomRangeF(-0.05, 0.05)

    return (t) => [
        t * t * quadraticMult1 + t * linearOne + cosMult * Math.cos(t / inCosDiv),
        t * t * quadraticMult2 + t * linearTwo + sinMult * Math.cos(t / inSinDiv)
    ]
}

function drawPattern(canvasRef) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let pattern = currentPattern;
    let moveFunction = pattern.moveFunction;
    let initialPosition = pattern.initialPosition;
    let startingFrame = pattern.startingFrame;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let [location, angle] = calculatePositionAndRotation(
        startingFrame,
        frame,
        initialPosition,
        moveFunction
    )
    draw(ctx, location, angle);
}

const disappearanceThreshold = 200

function currentlyInBounds() {
    let pattern = currentPattern;
    let moveFunction = pattern.moveFunction;
    let initialPosition = pattern.initialPosition;
    let startingFrame = pattern.startingFrame;
    let [{x, y}, angle] = calculatePositionAndRotation(
        startingFrame,
        frame,
        initialPosition,
        moveFunction
    )
    if (x < -disappearanceThreshold || x > window.innerWidth + disappearanceThreshold) {
        return false;
    }
    if (y < -disappearanceThreshold || y > getActualHeight() + disappearanceThreshold) {
        return false;
    }
    return true;
}

function draw(ctx, location, angle) {
    ctx.fillStyle = 'deepskyblue';
    ctx.shadowColor = 'dodgerblue';
    ctx.shadowBlur = 2;
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    ctx.rotate(angle);
    ctx.drawImage(shipImage, 5, 5);
    ctx.restore();
}

function normalized(vec2D) {
    let directionLength = Math.sqrt(vec2D[0] * vec2D[0] + vec2D[1] * vec2D[1])
    return [vec2D[0] / directionLength, vec2D[1] / directionLength]
}

function angleFromDirection(vec2D) {
    let sign = vec2D[1] < 0 ? (-1) : 1;
    let angle = sign * Math.acos(vec2D[0])
    return angle;
}

function calculatePositionAndRotation(initialFrame, currentFrame, initialPosition, moveFunction) {
    //  direction = normalized(direction)
    let oldMovement = moveFunction(currentFrame - 1 - initialFrame)
    let newMovement = moveFunction(currentFrame - initialFrame)
    let oldPosition = [
        initialPosition[0] + (oldMovement[0]),
        initialPosition[1] + (oldMovement[1])
    ]
    let newPosition =
        [
            initialPosition[0] + (newMovement[0]),
            initialPosition[1] + (newMovement[1])
        ]
    let direction = normalized(
        [
            newPosition[0] - oldPosition[0],
            newPosition[1] - oldPosition[1]
        ]
    )
    return [{x: newPosition[0], y: newPosition[1]}, angleFromDirection(direction)]
}

export function BackgroundCanvas(props) {
    const canvasRef = React.useRef(null);
    const [time, setTime] = useState(Date.now());
    getActualHeight = () => {
        if (props.father.current == null) {
            return window.innerHeight;
        }
        //if (initialHeight == null) // uncomment to remember height
        initialHeight = props.father.current.clientHeight;
        return initialHeight;
    }
    React.useEffect(() => {
        if (shipImage.src === "")
            shipImage.src = loadCanvasSprite();
        if (currentPattern == null) {
            currentPattern = generateRandomPattern();
        }
        drawPattern(canvasRef)
        if (!currentlyInBounds()) {
            currentPattern = null;
            console.log("pattern finished, seeking new on")
        }
    });

    useEffect(() => {
        const interval = setInterval(() =>
            setTime(Date.now()), 1000 / 24);
        return () => {
            clearInterval(interval);
        };
    }, []);
    frame++;
    return <canvas
        style={{height: `${getActualHeight()}px`}}
        className={"unscrollableBackground"}
        ref={canvasRef}
        width={window.innerWidth}
        height={getActualHeight()}
    />

}