const validatePortfolio = (url) => {
    if (!url.trim()) return null;
    if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(url)) return "Enter a valid URL.";
    return null;
};

export default validatePortfolio;
