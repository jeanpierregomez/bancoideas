import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App () {
    const handlerClick = (e) => {
        console.log("holi")
        let cursor = e.target;
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    }
    const handlerMouseMove = (e) => {
        console.log("holi")
        let cursor = e.target;
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    }
    return (
        <div className="App">
            <div className="cursor" onClick={handlerClick} onMouseMove={handlerMouseMove}></div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}