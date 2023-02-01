import { styled } from "../../../styles";
import { Container } from "../../../styles/global"; 

export const SectionCharacterSyle = styled("section", {
    marginTop: "9.6rem",
    height: "63.1rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    [`${Container}`]: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    },
    ".image":{
        borderRadius: 5,
        height: "100%",
        overflow: "hidden",
    },
    ".info": {
        flex: 1,
        maxWidth: "65rem",
        marginLeft: "3.2rem",
        display: "flex",
        span: {
            display: "block",
            marginTop: "2rem",
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: "2.7rem",
            color: "$gray400",
            opacity: "0.6",
        },
        "& > div": {
            position: "relative",
            flex: 1,
            maxWidth: "54.6rem",
            paddingLeft: "2.7rem",
            marginLeft: "1.9rem",
            "&:before": {
                content: "",
                position: "absolute",
                top: "1.2rem",
                left: 0,
                width: "0.4rem",
                height: "4.6rem",
                backgroundColor: "$red800",
            },
            h1: {
                fontWeight: 600,
                fontSize: "6.1rem",
                lineHeight: "7.1rem",
                color: "$white",
                marginBottom: "1.3rem"
            },
            p: {
                fontWeight: 400,
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                color: "$gray400",
            },
        }
    }
})