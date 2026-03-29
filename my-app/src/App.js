import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="body">
      <Avatar />
      <Intro />
      <Skilllist />
    </div>
  );
}
function Avatar() {
  return <img className="image" src="photo.jpg" alt=""></img>;
}
function Intro() {
  return (
    <div className="para">
      <p>dolor sit amet consectetur adipi elit. Dignissimos tenetur</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
      <p>repellat cum liquid ut, soluta ducimus quam, voluptate</p>
    </div>
  );
}
function Skilllist() {
  return (
    <Skill
      name1="Html+Css 🔥"
      name2="Javascript 🔥"
      name3=" Git Github 🔥"
      name4="web design 🔥"
      name5="React 🔥"
    />
  );
}
function Skill(props) {
  const style1 = { backgroundColor: "blue" };
  const style2 = { backgroundColor: "yellow" };
  const style3 = { backgroundColor: "green" };
  const style4 = { backgroundColor: "red" };
  const style5 = { backgroundColor: "pink" };
  return (
    <div className="web">
      <span style={style1}>{props.name1} </span>
      <span style={style2}>{props.name2} </span>
      <span style={style3}> {props.name3}</span>
      <span style={style4}> {props.name4}</span>
      <span style={style5}> {props.name5}</span>
    </div>
  );
}

export default App;
