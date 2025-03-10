const TextareaInput = ({ label, placeholder, value, onChange, error }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <textarea placeholder={placeholder} value={value} onChange={onChange} />
            {error && <span>{error}</span>}
        </div>
    );
};

export default TextareaInput;
