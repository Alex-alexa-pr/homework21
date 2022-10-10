function Title ({name, type}) {
    const className = type === "bold" ? "bold" : "normal";

    return <h1 className={className}>{name}</h1>;
}

export default Title;