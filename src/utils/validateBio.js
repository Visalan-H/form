const validateBio = (bio) => {
    if (!bio.trim()) return "Bio is required.";
    if (bio.length < 150 || bio.length > 200) return "Bio must be between 150-200 characters.";
    return null;
};

export default validateBio;
