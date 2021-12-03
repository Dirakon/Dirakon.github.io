
let root;
function startResolutionCourutine() {
    root = document.querySelector(':root');
    automaticallyChangeScaleFactor()
    setInterval(automaticallyChangeScaleFactor, 1000);
}

function clamp(value, min, max) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value
}

let previousNormalizedHeightToWidthRatio = 1;
function automaticallyChangeScaleFactor() {
    let heightToWidthRatio = window.innerHeight / window.innerWidth;
    let normalizedHeightToWidthRatio = clamp(heightToWidthRatio, 1, 1.5)
    if (previousNormalizedHeightToWidthRatio !== normalizedHeightToWidthRatio)
        root.style.setProperty('--scaleFactor', normalizedHeightToWidthRatio);
    previousNormalizedHeightToWidthRatio = normalizedHeightToWidthRatio;
}

export default startResolutionCourutine