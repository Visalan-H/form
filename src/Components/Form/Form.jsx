import { useState } from "react";
import TextInput from "../TextInput";
import TextareaInput from "../TextareaInput";
import FileInput from "../FileInput";
import handleUserInfoChange from "../../handlers/handleUserInfoChange";
import handleFileChange from "../../handlers/handleFileChange";
import handleMandatoryUrlChange from "../../handlers/handleMandatoryUrlChange";
import handleSocialAccountsChange from "../../handlers/handleSocialAccountsChange";
import handleSubmit from "../../handlers/handleSubmit";
import "./Form.css";

const Form = () => {
    const [userInfo, setUserInfo] = useState({ username: "", bio: "", portfolio: "" });
    const [files, setFiles] = useState({ resume: null, profilePic: null });
    const [mandatoryUrls, setMandatoryUrls] = useState({ linkedin: "", leetcode: "" });
    const [socialAccounts, setSocialAccounts] = useState({});
    const [errors, setErrors] = useState({});

    return (
        <form onSubmit={(e) => handleSubmit({ e, userInfo, files, mandatoryUrls, socialAccounts, setErrors })}>
            <TextInput
                label="Username *"
                placeholder="Enter your username"
                value={userInfo.username}
                onChange={(e) => handleUserInfoChange({ field: "username", value: e.target.value, setUserInfo, setErrors })}
                error={errors.username}
            />

            <TextareaInput
                label="Bio (150-200 chars) *"
                placeholder="Write something about yourself"
                value={userInfo.bio}
                onChange={(e) => handleUserInfoChange({ field: "bio", value: e.target.value, setUserInfo, setErrors })}
                error={errors.bio}
            />

            <TextInput
                label="Portfolio Link"
                type="url"
                placeholder="https://your-portfolio.com"
                value={userInfo.portfolio}
                onChange={(e) => handleUserInfoChange({ field: "portfolio", value: e.target.value, setUserInfo, setErrors })}
                error={errors.portfolio}
            />

            <FileInput
                label="Resume (PDF Only)"
                accept=".pdf"
                onChange={(e) => handleFileChange({ field: "resume", file: e.target.files[0], setFiles, setErrors })}
                error={errors.resume}
            />

            <FileInput
                label="Profile Picture (Image Only)"
                accept="image/*"
                onChange={(e) => handleFileChange({ field: "profilePic", file: e.target.files[0], setFiles, setErrors })}
                error={errors.profilePic}
            />

            <TextInput
                label="LinkedIn Profile *"
                type="url"
                placeholder="https://linkedin.com/in/your-profile"
                value={mandatoryUrls.linkedin}
                onChange={(e) => handleMandatoryUrlChange({ field: "linkedin", value: e.target.value, setMandatoryUrls, setErrors })}
                error={errors.linkedin}
            />

            <TextInput
                label="LeetCode Profile *"
                type="url"
                placeholder="https://leetcode.com/your-profile"
                value={mandatoryUrls.leetcode}
                onChange={(e) => handleMandatoryUrlChange({ field: "leetcode", value: e.target.value, setMandatoryUrls, setErrors })}
                error={errors.leetcode}
            />

            <label>Social Media Links</label>
            <div className="social-accounts">
                {["behance", "dribble", "hackerrank", "insta", "x", "reddit", "hackerearth", "codechef", "gfg"].map((platform) => (
                    <TextInput
                        key={platform}
                        label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                        type="url"
                        placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile Link`}
                        value={socialAccounts[platform] || ""}
                        onChange={(e) => handleSocialAccountsChange({ field: platform, value: e.target.value, setSocialAccounts, setErrors })}
                        error={errors[platform]}
                    />
                ))}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
