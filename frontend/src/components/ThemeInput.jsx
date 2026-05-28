import {useState}  from "react";
function ThemeInput({onSubmit}) {
    const [theme, setTheme] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!theme.trim()) {
            setError("pls enter a theme");
            return
        }
        onSubmit(theme);
    }
    return <div className="theme-input-container">
        <h2> Generate your adventure</h2>
        <p>  enter a the theme </p>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <input type="text"
                   value={theme}
                   onChange={(e) => setTheme(e.target.value)}
                   placeholder="Enter theme"
                   className={error ? "error" : ""}
                   />
            {error && <p className="error">{error}</p>}
           </div>
           <button type="submit">Submit className='generate-btn'
            generate story</button>
        </form>
    </div>
}
export default ThemeInput;