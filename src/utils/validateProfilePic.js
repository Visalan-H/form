const validateProfilePic = (file, maxSizeMB = 2) => {
    if (!file) return "Profile picture is required.";

    if (file.type === "image/png") {
        return "PNG files are not allowed.";
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
        return `File size should not exceed ${maxSizeMB}MB.`;
    }

    return null;
};

export default validateProfilePic;
