const validateUsername = (username) => {
    if (!username.trim()) return "Username is required.";
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return "Only letters, numbers, and underscores allowed."; //gpt gave regex
    return null;
};

export default validateUsername;
