import { readBuilderProgram } from "typescript";
import { styled } from "../../../styles";

export const StyleSectionCharacters = styled("section", {
    paddingTop: "5.6rem",
    paddingBottom: "7.2rem",
    ".title": {
        display: "flex",
        alignItems: "center",
        marginBottom: "5.6rem",
        span: {
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: "2.7rem",
            color: "rgba(255,255,255, 0.4)",
            marginRight: "11.3rem"
        },
        h2: {
            position: "relative",
            maxWidth: "21.6rem",
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: "3.5rem",
            color: "$white",
            paddingLeft: "1.6rem",
            "&:before": {
                content: "",
                position: "absolute",
                top: "0.55rem",
                left: 0,
                width: "0.2rem",
                height: "5.9rem",
                background: "$red800",
                display:"flex",
            }
        },
    }
})

export const StyleListCharacters = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "4rem 3.3rem",
    ".marvel": {
        width: "28rem",
        height: "36.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})