
import "./App.css";
const skillsInfo = [
  {
    skillName: "html",
    emoji: "💪 ",
    bgColor: "red",
  },

  {
    skillName: "css",
    emoji: "👶",
    bgColor: "green",
  },

  {
    skillName: "javascript",
    emoji: "🤙",
    bgColor: "blue",
  },

  {
    skillName: "github",
    emoji: "👶",
    bgColor: "purple",
  },
];
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
    <div className="web">
      {skillsInfo.map((ele) => {
        return <Skill skillObj={ele} />;
      })}
    </div>
  );
}
function Skill(props) {
  return (
    <span  style={{ backgroundColor: props.skillObj.bgColor }}>
      <span>{props.skillObj.skillName} </span>
      <span>{props.skillObj.emoji} </span>
    </span>
  );
}

export default App;







