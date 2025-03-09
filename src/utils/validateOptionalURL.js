const validateOptionalURL = (url) => {
    if (!url.trim()) return null; // No error if field is empty

    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.*)?$/i;
    if (!urlPattern.test(url)) return "Invalid URL format.";

    return null;
};

export default validateOptionalURL;
