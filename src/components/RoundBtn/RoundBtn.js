import "./RoundBtn.css"

export default function RoundBtn ({ type, text }) {
    return (
        <a className={`${type} roundbtn`} href="">{text}</a>
    ); 
} 