import validateUsername from "../utils/validateUsername";
import validateBio from "../utils/validateBio";
import validatePortfolio from "../utils/validatePortfolio";

const handleUserInfoChange = ({ field, value, setUserInfo, setErrors }) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));

    let error = null;
    if (field === "username") error = validateUsername(value);
    if (field === "bio") error = validateBio(value);
    if (field === "portfolio") error = validatePortfolio(value);

    setErrors((prev) => ({ ...prev, [field]: error }));
};

export default handleUserInfoChange;
