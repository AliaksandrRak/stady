const SET_SELECTED_DIRECTION = 'SET_SELECTED_DIRECTION'

const changeLanguagePart = function(isSecondLanguageGroupPart,isAdminLanguageType) {
    return {
        type: SET_SELECTED_DIRECTION,
        isSecondLanguageGroupPart: isSecondLanguageGroupPart,
        isAdminLanguageType:isAdminLanguageType
    }
}

export {SET_SELECTED_DIRECTION,changeLanguagePart}