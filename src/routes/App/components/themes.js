
//using theme.js to store props for light and dark theme and using global styles to map lightMode and darkMode to state of light mode/ dark mode
import { createGlobalStyle } from "styled-components";

//color code for light mode
export const lightMode = {

    overview: "#eff0eb", 
    app: "#eff0eb",
    title: "#000",
    //column: "#757763",
};

//color code for dark mode
export const darkMode = {

    overview: "#121212",
    overview_area: "auto",
    app: "#121212",
    title: "#BB86FC",
    column: "#d0d1cd",
    control_bk: "rgba(255, 255, 255, 0.2)",
    control_cl: "#d0d1cd",
    save_bck: "#BB86FC",
    save_txt: "#000",
    save_opacity: "75%",
    submit_bck: "#03DAC6",
    submit_txt: "#000",
    sun:"#f9d71c",

};

//object to change color props on button click 
export const GlobalStyles = createGlobalStyle`
    .overview {
        background-color: ${(props) => props.theme.overview};
        width: ${(props) => props.theme.overview_area};
        height: ${(props) => props.theme.overview_area};
    }
	.app {
		background-color: ${(props) => props.theme.app};
	}
    .title {
        color: ${(props) => props.theme.title};
    }
    .column {
        color: ${(props) => props.theme.column};
    }
    .input {
        background-color: ${(props) => props.theme.control_bk};
        color: ${(props) => props.theme.control_cl};
    }
    .input::placeholder {
        color: ${(props) => props.theme.control_cl};
    }
    .button.is-primary{
        background-color: ${(props) => props.theme.save_bck};
        color: ${(props) => props.theme.save_txt};
    }
    .button.is-primary:hover{
        background-color: ${(props) => props.theme.save_bck};
        color: ${(props) => props.theme.save_txt};
        opacity: ${(props) => props.theme.save_opacity};
    }
    .button.is-link{
        background-color: ${(props) => props.theme.submit_bck};
        color: ${(props) => props.theme.submit_txt}; 
    }
    .button.is-link:hover{
        background-color: ${(props) => props.theme.submit_bck};
        color: ${(props) => props.theme.submit_txt};
        opacity: ${(props) => props.theme.save_opacity};
    }
    .app__dark-mode-btn.icon.level-right{
        color: ${(props) => props.theme.sun};
    }
`;