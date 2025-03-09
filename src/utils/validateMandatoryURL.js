const validateMandatoryURL = (url) => {
    if (!url.trim()) return "This field is required.";

    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.*)?$/i;
    if (!urlPattern.test(url)) return "Invalid URL format.";

    return null;
};

export default validateMandatoryURL;
