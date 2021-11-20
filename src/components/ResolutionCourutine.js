
let previousHeightToWidthRatio = 1;
let root;
function startResolutionCourutine() {
    root = document.querySelector(':root');
    automaticallyChangeScaleFactor()
    setInterval(automaticallyChangeScaleFactor, 1000);
}

function automaticallyChangeScaleFactor() {
    return () => {
        let heightToWidthRatio = window.innerHeight / window.innerWidth;
        if (heightToWidthRatio < 1)
            heightToWidthRatio = 1;
        if (heightToWidthRatio > 1.5)
            heightToWidthRatio = 1.5;
        if (previousHeightToWidthRatio !== heightToWidthRatio)
            root.style.setProperty('--scaleFactor', heightToWidthRatio);
        previousHeightToWidthRatio = heightToWidthRatio;
    };
}

export default startResolutionCourutine