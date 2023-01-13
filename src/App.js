import React from "react";
import LiveIcon from "../public/assets/live-line.svg";
import ShareIcon from "../public/assets/share-forward-line.svg";

const App = () => {
  const myStyle = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fefae0",
      padding: "1.5rem",
      color: "#283618",
      borderRadius: "5px",
    },
    content: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
    },
    video: {
      borderRadius: "5px",
    },
    h3: {
      color: "#bc6c25",
      marginBottom: "0rem",
      paddingBottom: "0rem",
    },
    bold: {
      fontWeight: "700",
    },
    chip: {
      backgroundColor: "#28361820",
      border: "0",
      alignSelf: "flex-start",
      marginBottom: "1rem",
      padding: ".5rem",
      borderRadius: "5px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    btn: {
      backgroundColor: "#fefae0",
      border: "1px solid #ddd",
      padding: ".4rem",
      borderRadius: "5px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    icon: {
      width: "16px",
    },
  };
  return (
    <section style={myStyle.wrapper}>
      <button style={myStyle.chip}>
        <img src={LiveIcon} style={myStyle.icon} />
        Video recording
      </button>
      <video style={myStyle.video} controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </video>
      <article style={myStyle.content}>
        <div>
          <h3 style={myStyle.h3}>Movies</h3>
          <p style={myStyle.bold}>Big Buck Bunny</p>
        </div>
        <button style={myStyle.btn}>
          <img src={ShareIcon} style={myStyle.icon} />
          Share
        </button>
      </article>
      <article>
        <h3 style={myStyle.h3}>Description</h3>
        <p style={myStyle.p}>
          Big Buck Bunny tells the story of a giant rabbit with a heart bigger
          than himself. When one sunny day three rodents rudely harass him,
          something snaps... and the rabbit ain't no bunny anymore! In the
          typical cartoon tradition he prepares the nasty rodents a comical
          revenge.
        </p>
      </article>
    </section>
  );
};

export default App;
