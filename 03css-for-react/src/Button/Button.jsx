import styles from "./Button.module.css"

function Button(){

    // Inline Styles
    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    // }

    return(
        // For inline:
        // <button style={styles}>Click Me</button>
        <button className={styles.button}>Click Me</button>
    )
}

export default Button