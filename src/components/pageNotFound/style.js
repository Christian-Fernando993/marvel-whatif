import {styled} from "../../styles";
import { Container } from "../../styles/global";

export const StylePageNotFound = styled("section", {
    marginTop: "9.6rem",
    paddingTop: "9.5rem",
    paddingBottom: "15rem",
    [`${Container}`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    h1: {
        fontWeight: 600,
        fontSize: "4.9rem",
        lineHeight: "5.9rem",
        color: "$white",
        marginBottom: "2.4rem",
    },
    p: {
        fontWeight: 400,
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
        color: "$white",
        maxWidth: "64.1rem",
        textAlign: "center",
        marginBottom: "4rem",
    },
    ".link": {
      backgroundColor: "$red800",
      color: "$white",
      textDecoration: "none",
      borderRadius: "0.8rem",
      padding: "2rem 8.3rem",
      marginBottom: "7.2rem",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      transition: "filter 0.3s ease",
      "&:hover": {
        filter: "brightness(0.8)",
      }
    }
})