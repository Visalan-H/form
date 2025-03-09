const handleFileChange = ({ field, file, setFiles, setErrors }) => {
    if (!file) return;

    let errors = {};

    if (field === "resume") {
        if (file.type !== "application/pdf") {
            errors.resume = "Only PDF files are allowed.";
        }
    } else if (field === "profilePic") {
        if (!file.type.startsWith("image/")) {
            errors.profilePic = "Only image files are allowed.";
        } else if (file.size > 2 * 1024 * 1024) {
            errors.profilePic = "File size must be less than 2MB.";
        }
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...errors }));

    if (Object.keys(errors).length === 0) {
        setFiles((prevFiles) => ({ ...prevFiles, [field]: file }));
    }
};

export default handleFileChange;
