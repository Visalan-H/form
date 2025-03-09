import validateUsername from "../utils/validateUsername";
import validateBio from "../utils/validateBio";
import validatePortfolio from "../utils/validatePortfolio";
import validateResume from "../utils/validateResume";
import validateProfilePic from "../utils/validateProfilePic";
import validateMandatoryURL from "../utils/validateMandatoryURL";
import validateOptionalURL from "../utils/validateOptionalURL";

const handleSubmit = ({ e, userInfo, files, mandatoryUrls, socialAccounts, setErrors }) => {
    e.preventDefault(); // Prevents page refresh

    let errors = {};

    errors.username = validateUsername(userInfo.username);
    errors.bio = validateBio(userInfo.bio);
    errors.portfolio = validatePortfolio(userInfo.portfolio);

    errors.resume = validateResume(files.resume);
    errors.profilePic = validateProfilePic(files.profilePic);

    errors.linkedin = validateMandatoryURL(mandatoryUrls.linkedin);
    errors.leetcode = validateMandatoryURL(mandatoryUrls.leetcode);

    Object.keys(socialAccounts).forEach((key) => {
        const error = validateOptionalURL(socialAccounts[key]);
        if (error) errors[key] = error;
    });

    errors = Object.fromEntries(Object.entries(errors).filter(([_, value]) => value));

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
        alert("clear all errors!")
        return;
    } 

    
    const formData = {
        userInfo,
        files: {
            resume: files.resume ? files.resume.name : null,
            profilePic: files.profilePic ? files.profilePic.name : null
        },
        mandatoryUrls,
        socialAccounts
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Saved")
    
};

export default handleSubmit;
