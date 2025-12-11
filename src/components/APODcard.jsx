export default function APODCard(props) {
    return (
        <>
            <h4 style={{color:"#FFD700"}}>{props.data.title}</h4>
            {props.data.media_type === "image" && (
                <img 
                    src={props.data.url} 
                    alt={props.data.title} 
                    style={{ 
                        maxHeight: "80vh",
                        objectFit:"contain",
                        borderRadius: "0.5rem", 
                        marginTop:"1rem"
                    }}
                />
            )}
            {props.data.media_type === "video" && (
                <div style={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                    overflow: "hidden",
                    borderRadius: "0.5rem"
                }}>
                    <iframe 
                        src={props.data.url} 
                        title={props.data.title}
                        allow="fullscreen"
                        style={{
                            width: "100%",
                            aspectRatio: "16 / 9",
                            border: "none",
                            display: "block",
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}
            <footer style={{
                color: "white",
                fontSize: "0.9rem",
                opacity: 0.5,
                marginTop: ".5rem",
                marginBottom: ".5rem",
            }}>
                Data & imagery courtesy of NASA’s Astronomy Picture of the Day (APOD).
            </footer>
            {props.data.copyright && (
                <p style={{
                    color: "#FFD700",
                    fontSize: "0.8rem",
                    opacity: 0.8,
                }}>
                    © {props.data.copyright}
                </p>
            )}
            <p style={{color:"white", width:"70%"}}>
                {props.data.explanation}
            </p>
        </>
    );
}