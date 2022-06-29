const projectLogos = require.context('../images/project_logos', true);
const programmingLanguageIcons = require.context('../images/icons/programming_languages', true);
const socialMediaIcons = require.context('../images/icons/social_media', true);
const projectVideos = require.context('../videos', true);
const canvasSprites = require.context('../images/canvas_sprites', true);

const programmingLanguageTagToImageFile = require("../static_data/programming_language_tag_to_image_file.json")
const projectList = require("../static_data/project_list.json")
const socialMediaImageFileToUrl = require("../static_data/social_media_image_file_to_url.json")
const canvasSpriteToUrl = require("../static_data/canvas_sprite_to_image_file.json")

export function loadProgrammingLanguageIcon(imageFileName) {
    return programmingLanguageIcons(`./${imageFileName}.png`);
}
export function loadSocialMediaIcon(imageFileName) {
    return socialMediaIcons(`./${imageFileName}.png`);
}
export function loadProjectLogo(imageFileName) {
    return projectLogos(`./${imageFileName}.png`);
}
export function loadCanvasSprite() {
    return canvasSprites(`./ShipInFlight.png`);
}

export function loadProjectVideo(videoFileName) {
    try {
        return projectVideos(`./${videoFileName}.mp4`);
    } catch (error) {
        // no video found
        return undefined;
    }
}
export function loadProjectList() {
    return projectList;
}
export function loadSocialMediaFileNameToURLObject() {
    return socialMediaImageFileToUrl;
}
export function loadProgrammingLanguageTagToImageFileObject() {
    return programmingLanguageTagToImageFile;
}