const validateResume = (file, maxSizeMB = 2) => {
    if (!file) return "Resume is required.";

    if (file.type !== "application/pdf") {
        return "Invalid file type. Only PDF files are allowed.";
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
        return `File size should not exceed ${maxSizeMB}MB.`;
    }

    return null; 
};

export default validateResume;
