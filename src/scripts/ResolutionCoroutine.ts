export let heightToWidthRatio = 1;

let root: HTMLElement;

function startResolutionCoroutine() {
    root = document.querySelector(':root')!;
    automaticallyChangeScaleFactor()
    setInterval(automaticallyChangeScaleFactor, 1000);
}

function clamp(value: number, min: number, max: number) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value
}

let previousNormalizedHeightToWidthRatio = 1;

function automaticallyChangeScaleFactor() {
    heightToWidthRatio = window.innerHeight / window.innerWidth;
    let normalizedHeightToWidthRatio = clamp(heightToWidthRatio, 1, 1.5)
    if (previousNormalizedHeightToWidthRatio !== normalizedHeightToWidthRatio)
        root.style.setProperty('--scaleFactor', normalizedHeightToWidthRatio.toString());
    previousNormalizedHeightToWidthRatio = normalizedHeightToWidthRatio;
}

export default startResolutionCoroutine