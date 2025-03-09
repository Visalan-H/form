import validateOptionalURL from "../utils/validateOptionalURL";

const handleSocialAccountsChange = ({ field, value, setSocialAccounts, setErrors }) => {
    setSocialAccounts((prev) => ({ ...prev, [field]: value }));

    const error = validateOptionalURL(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
};

export default handleSocialAccountsChange;
