
function extractCriteriaToFormattedFeaturesFromProjects(projects) {
    let extractedCriteria = extractCriteria(projects)
    let extractedCriteriaToFeaturesToCounts = countFeatures(extractedCriteria, projects)
    let extractedCriteriaToCountedFeatures = formatFeaturesInCriteria(extractedCriteriaToFeaturesToCounts);

    return extractedCriteriaToCountedFeatures
}
function extractCriteria(projects) {
    let extractedCriteria = {}
    projects.forEach(project => {
        if (project.criteriaToFeatures !== undefined) {
            extractedCriteria = mergeCriteria(project.criteriaToFeatures, extractedCriteria);
        }
    })
    return extractedCriteria
}

function mergeCriteria(criteriaToX1, criteriaToX2) {
    let mergedCriteria = {}
    addDictionaryKeys(mergedCriteria, criteriaToX1);
    addDictionaryKeys(mergedCriteria, criteriaToX2);
    return mergedCriteria
}

function addDictionaryKeys(mergedCriteria, criteriaToSomething) {
    Object.keys(criteriaToSomething).forEach((criterion) => {
        mergedCriteria[criterion] = {};
    });
}

function countFeatures(extractedCriteria, projects) {

    projects.forEach(project => {
        if (project.criteriaToFeatures !== undefined) {
            Object.keys(project.criteriaToFeatures).forEach((criterion) => {
                countFeaturesUnderSpecificCriterion(project.criteriaToFeatures[criterion], extractedCriteria,criterion)
            })
        }
    })

    return extractedCriteria
}
function countFeaturesUnderSpecificCriterion(featuresToCount, criterionsToFeaturesToCounters, criterion) {
    featuresToCount.forEach(feature => {
        if (!criterionsToFeaturesToCounters[criterion].hasOwnProperty(feature)) {
            criterionsToFeaturesToCounters[criterion][feature] = 1
        } else {
            criterionsToFeaturesToCounters[criterion][feature] += 1
        }
    });
}

function formatFeaturesInCriteria(extractedCriteria) {
    Object.keys(extractedCriteria).forEach((criterion, index) => {
        let handledFeatures = [];
        for (var feature in extractedCriteria[criterion]) {
            if (extractedCriteria[criterion].hasOwnProperty(feature)) {
                handledFeatures = handledFeatures.concat(feature + " (" + extractedCriteria[criterion][feature].toString() + ")");
            }
        }
        extractedCriteria[criterion] = handledFeatures;
    });
    return extractedCriteria
}

export default extractCriteriaToFormattedFeaturesFromProjects;