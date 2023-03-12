const projectLogos = require.context('../images/project_logos', true);
const programmingLanguageIcons = require.context('../images/icons/programming_languages', true);
const socialMediaIcons = require.context('../images/icons/social_media', true);
const projectVideos = require.context('../videos', true);
const canvasSprites = require.context('../images/canvas_sprites', true);

const programmingLanguageTagToImageFile = require("../static_data/programming_language_tag_to_image_file.json")
const projectList = require("../static_data/project_list.json")
const socialMediaImageFileToUrl = require("../static_data/social_media_image_file_to_url.json")
const canvasSpriteToUrl = require("../static_data/canvas_sprite_to_image_file.json")

export function loadProgrammingLanguageIcon(imageFileName: string): string | undefined {
    return programmingLanguageIcons(`./${imageFileName}.png`);
}

export function loadSocialMediaIcon(imageFileName: string): string | undefined {
    return socialMediaIcons(`./${imageFileName}.png`);
}

export function loadProjectLogo(imageFileName: string): string | undefined {
    return projectLogos(`./${imageFileName}.png`);
}

export function loadCanvasSprite(): string | null {
    return canvasSprites(`./ShipInFlight.png`);
}

export function loadProjectVideo(videoFileName: string): undefined | string {
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

export function socialMediaImagePathToUrl(imagePath: string): string | undefined {
    return socialMediaImageFileToUrl[imagePath]
}

export function getAllSocialMediaImagePaths(): Array<string> {
    return Array.from(new Map<string, string>(Object.entries(socialMediaImageFileToUrl)).keys())
}

export function programmingLanguageTagToImageFileObject(programmingLanguageTag: string): string | null {
    return programmingLanguageTagToImageFile[programmingLanguageTag];
}