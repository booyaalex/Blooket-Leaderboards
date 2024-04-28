import "./Index.css";

function Index() {
  return (
    <>
      <div id="bgContain">
        <div id="bg"></div>
      </div>

      <div id="main">
        <h1 className="mainHeader">Blooket Leaderboards</h1>
        <br />
        <div className="board center">
          <div className="sp-header">What is This?</div>
          <br />
          <br />
          <h3
            style={{
              fontSize: "18px",
              color: "white",
              paddingLeft: "5px",
              paddingRight: "5px"
            }}
          >
            Blooket Leaderboards is a website that showcases leaderboards
            ranking the achievements of many different blooket players. You can
            see leaderboards from a wide variety of different categories, from
            gamemodes, to stats, even to the leaderboards from blooket events.
            This website is here to showcase the skill of any and all blooket
            players.
          </h3>
        </div>
        <br />
        <br />
        <br />
        <div className="board left">
          <div className="sp-header">Event Leaderboards</div>
          <br />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="row">
                <div className="statsBox" /*onclick='coc2023()'*/>
                  <div className="statTitle">CoC 2023</div>
              </div>
                <div className="statsBox" /*onclick='coc2022()'*/>
                  <div className="statTitle">CoC 2022</div>
              </div>
                <div className="statsBox" /*onclick='lunch()'*/>
                  <div className="statTitle">L.U.N.C.H</div>
              </div>
            </div>
            <div className="row">
                <div className="statsBox">
                  <div className="statTitle">CoC 2021</div>
              </div>
                <div className="statsBox" /*onclick='coc2020()'*/>
                  <div className="statTitle">CoC 2020</div>
              </div>
                <div className="statsBox">
                  <div className="statTitle">CoC 2019</div>
              </div>
            </div>
            <div className="row">
                <div className="statsBox" /*onclick='pop()'*/>
                  <div className="statTitle">PoP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="board right">
          <div className="sp-header">Popular Leaderboards</div>
          <br />
          <br />
          <div style={{ paddingTop: "15px", textAlign: "center" }}>
            <a href="TD/LD_LB" className="popLinks">
              [3] Lost Desert LB(TD1)
            </a>
            <br />
            <a href="flappyLB" className="popLinks">
              [3] Flappy Blook
            </a>
            <br />
            <a href="TD2LB/easyC_LB" className="popLinks">
              [2] Sunny Meadow Easy LB(TD2)
            </a>
            <br />
            <a href="cafe/highDay_LB" className="popLinks">
              [2] Highest Cafe Day
            </a>
            <br />
            <a href="google.com" className="popLinks">
              Placeholder
            </a>
            <br />
            <a href="gamemodes" className="popLinks">
              Placeholder
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
