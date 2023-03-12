import React, {useEffect, useState} from "react";
import './../styles/BackgroundCanvas.css'
import {loadCanvasSprite} from "../scripts/FileLoader";

let frame = 0;
let getActualHeight: () => number;
const SCALE = 1;
const OFFSET = 80;
let shipImage = new Image();
let initialHeight: number;

type Position = { x: number, y: number };
type MovePattern = { startingFrame: number; initialPosition: Position; moveFunction: (time: number) => Position };
let currentPattern: MovePattern | null = null;

function randomRangeF(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

function generateRandomPattern(): MovePattern {
    let initialRandomPosition: Position;
    let randomSide = Math.round(Math.random() * 3);
    const wallOffset = 200;
    const leftWall = -wallOffset;
    const rightWall = window.innerWidth + wallOffset;
    const topWall = -wallOffset;
    const downWall = getActualHeight() + wallOffset;
    switch (randomSide) {
        case 0: // Left
            initialRandomPosition = {
                x: leftWall,
                y: randomRangeF(topWall, downWall)
            }
            break;
        case 1: // Right
            initialRandomPosition = {
                x: rightWall,
                y: randomRangeF(topWall, downWall)
            }
            break;
        case 2: // Top
            initialRandomPosition = {
                x: randomRangeF(leftWall, rightWall),
                y: topWall
            }
            break;
        case 3: // Down
            initialRandomPosition = {
                x: randomRangeF(leftWall, rightWall),
                y: downWall
            }
            break;
        default:
            throw new Error("Trying to generate pattern for side: " + randomSide)
    }
    return {
        startingFrame: frame,
        initialPosition: initialRandomPosition,
        moveFunction: generateRandomMoveFunction()
    }
}

function generateRandomMoveFunction(): (time: number) => Position {
    let [linearOne, linearTwo] = normalized([randomRangeF(-10, 10), randomRangeF(-10, 10)])
    let speed = randomRangeF(5, 15)
    linearOne *= speed
    linearTwo *= speed

    let cosMult = randomRangeF(-100, 100), inCosDiv = randomRangeF(10, 19)
    let sinMult = randomRangeF(-100, 100), inSinDiv = randomRangeF(10, 19)

    let quadraticMult1 = randomRangeF(-0.05, 0.05), quadraticMult2 = randomRangeF(-0.05, 0.05)

    return (time: number) => {
        return {
            x: time * time * quadraticMult1 + time * linearOne + cosMult * Math.cos(time / inCosDiv),
            y: time * time * quadraticMult2 + time * linearTwo + sinMult * Math.cos(time / inSinDiv)
        }
    }
}

function drawPattern(canvasRef: React.MutableRefObject<null | HTMLCanvasElement>) {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    let pattern: MovePattern = currentPattern!;
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
    let pattern: MovePattern = currentPattern!;
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

function draw(ctx: CanvasRenderingContext2D, location: Position, angle: number) {
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

function normalized(vec2D: number[]) {
    let directionLength = Math.sqrt(vec2D[0] * vec2D[0] + vec2D[1] * vec2D[1])
    return [vec2D[0] / directionLength, vec2D[1] / directionLength]
}

function angleFromDirection(vec2D: number[]) {
    let sign = vec2D[1] < 0 ? (-1) : 1;
    let angle = sign * Math.acos(vec2D[0])
    return angle;
}

function calculatePositionAndRotation(initialFrame: number, currentFrame: number, initialPosition: Position, moveFunction: (arg0: number) => Position): [Position, number] {
    //  direction = normalized(direction)
    let oldMovement = moveFunction(currentFrame - 1 - initialFrame)
    let newMovement = moveFunction(currentFrame - initialFrame)
    let oldPosition = [
        initialPosition.x + (oldMovement.x),
        initialPosition.y + (oldMovement.y)
    ]
    let newPosition =
        [
            initialPosition.x + (newMovement.x),
            initialPosition.y + (newMovement.y)
        ]
    let direction = normalized(
        [
            newPosition[0] - oldPosition[0],
            newPosition[1] - oldPosition[1]
        ]
    )
    return [{x: newPosition[0], y: newPosition[1]}, angleFromDirection(direction)]
}

export function BackgroundCanvas(props: { father: { current: { clientHeight: number; } | null; }; }) {
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
            shipImage.src = loadCanvasSprite()!;
        if (currentPattern == null) {
            currentPattern = generateRandomPattern();
        }
        drawPattern(canvasRef)
        if (!currentlyInBounds()) {
            currentPattern = null;
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