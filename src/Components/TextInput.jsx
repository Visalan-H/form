const TextInput = ({ label, type = "text", placeholder, value, onChange, error }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <span>{error}</span>}
        </div>
    );
};

export default TextInput;
