const projectLogos = require.context('../images/project_logos', true);
const programmingLanguageIcons = require.context('../images/icons/programming_languages', true);
const socialMediaIcons = require.context('../images/icons/social_media', true);
const projectVideos = require.context('../videos', true);

const programmingLanguageTagToImageFile = require("../static_data/programming_language_tag_to_image_file.json")
const projectList = require("../static_data/project_list.json")
const socialMediaImageFileToUrl = require("../static_data/social_media_image_file_to_url.json")

export function loadProgrammingLanguageIcon(imageFileName){
    return programmingLanguageIcons(`./${imageFileName}.png`).default;
}
export function loadSocialMediaIcon(imageFileName){
    return socialMediaIcons(`./${imageFileName}.png`).default;
}
export function loadProjectLogo(imageFileName){
    return projectLogos(`./${imageFileName}.png`).default;
}

export function loadProjectVideo (videoFileName){
    try{
        return projectVideos(`./${videoFileName}.mp4`).default;
    }catch (error){
        // no video found
        return undefined;
    }
}
export function loadProjectData(){
    return projectList;
}
export function loadSocialMediaData(){
    return socialMediaImageFileToUrl;
}
export function loadProgrammingLanguageData(){
    return programmingLanguageTagToImageFile;
}