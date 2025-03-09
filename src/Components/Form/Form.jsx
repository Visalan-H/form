import { useState } from "react";
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
            <label>Username *</label>
            <input
                type="text"
                placeholder="Enter your username"
                value={userInfo.username}
                onChange={(e) => handleUserInfoChange({ field: "username", value: e.target.value, setUserInfo, setErrors })}
            />
            <span>{errors.username}</span>

            <label>Bio (150-200 chars) *</label>
            <textarea
                placeholder="Write something about yourself"
                value={userInfo.bio}
                onChange={(e) => handleUserInfoChange({ field: "bio", value: e.target.value, setUserInfo, setErrors })}
            />
            <span>{errors.bio}</span>

            <label>Portfolio Link</label>
            <input
                type="url"
                placeholder="https://your-portfolio.com"
                value={userInfo.portfolio}
                onChange={(e) => handleUserInfoChange({ field: "portfolio", value: e.target.value, setUserInfo, setErrors })}
            />
            <span>{errors.portfolio}</span>

            <label>Resume (PDF Only)</label>
            <div className="file-input-wrapper">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange({ field: "resume", file: e.target.files[0], setFiles, setErrors })}
                />
            </div>
            <span>{errors.resume}</span>

            <label>Profile Picture (Image Only)</label>
            <div className="file-input-wrapper">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange({ field: "profilePic", file: e.target.files[0], setFiles, setErrors })}
                />
            </div>
            <span>{errors.profilePic}</span>

            <label>LinkedIn Profile *</label>
            <input
                type="url"
                placeholder="https://linkedin.com/in/your-profile"
                value={mandatoryUrls.linkedin}
                onChange={(e) => handleMandatoryUrlChange({ field: "linkedin", value: e.target.value, setMandatoryUrls, setErrors })}
            />
            <span>{errors.linkedin}</span>

            <label>LeetCode Profile *</label>
            <input
                type="url"
                placeholder="https://leetcode.com/your-profile"
                value={mandatoryUrls.leetcode}
                onChange={(e) => handleMandatoryUrlChange({ field: "leetcode", value: e.target.value, setMandatoryUrls, setErrors })}
            />
            <span>{errors.leetcode}</span>

            <label>Social Media Links</label>
            <div className="social-accounts">
                {["behance", "dribble", "hackerrank", "insta", "x", "reddit", "hackerearth", "codechef", "gfg"].map((platform) => (
                    <div key={platform}>
                        <label>{platform.charAt(0).toUpperCase() + platform.slice(1)}</label>
                        <input
                            type="url"
                            placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile Link`}
                            value={socialAccounts[platform] || ""}
                            onChange={(e) => handleSocialAccountsChange({ field: platform, value: e.target.value, setSocialAccounts, setErrors })}
                        />
                        <span>{errors[platform]}</span>
                    </div>
                ))}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
