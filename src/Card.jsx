import katie from "./assets/images/katie.png";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} className="card--image"></img>
      <div className="card--stats">
        <span>5.0</span>
        <span>(6)</span>
        <span>USA</span>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From $136/person</p>
      </div>
    </div>
  );
}
