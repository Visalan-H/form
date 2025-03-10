const FileInput = ({ label, accept, onChange, error }) => {
    return (
        <div className="input-group file-input-wrapper">
            <label>{label}</label>
            <input type="file" accept={accept} onChange={onChange} />
            {error && <span>{error}</span>}
        </div>
    );
};

export default FileInput;
