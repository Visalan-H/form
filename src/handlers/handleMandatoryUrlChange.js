import validateMandatoryURL from "../utils/validateMandatoryURL";

const handleMandatoryUrlChange = ({ field, value, setMandatoryUrls, setErrors }) => {
    setMandatoryUrls((prev) => ({ ...prev, [field]: value }));

    const error = validateMandatoryURL(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
};

export default handleMandatoryUrlChange;
