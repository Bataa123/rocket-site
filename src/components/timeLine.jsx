import React, { useState, useEffect } from "react";
import left from "../assets/linkedIcons/leftArrow.svg";
import right from "../assets/linkedIcons/rightArrow.svg";
import rocket from "../assets/rocket.svg";
import { TimeLineHistory } from "./timeLineHistory";

export const TimeLine = () => {
  const [wich, setWich] = useState(1);

  useEffect(() => {
    document.getElementById("rocket").style.left =
      7.6 * ((wich - (wich % 2)) / 2 + 1) + "vw";
    for (var i = 0; i < 16; i++) {
      if (i % 2 === 0)
        document.getElementById(i).style.backgroundColor =
          i < wich ? "#00C167" : "black";
      else
        document.getElementById(i).style.backgroundColor =
          i <= wich ? "#00C167" : "#AFAFAF";
    }
  }, [wich]);
  return (
    <div className="timeline" id="timeLine" style={{ position: "relative" }}>
      <div className="secondLine"></div>
      <div className="timeline-head"> timeline </div>
      <div className="timeline-first-row">
        <div className="timelineText">
          Бид пуужингийн технелогтой холбоотой бараг бүхий л зүйлийг судлаж
          компютерийн симуляц хийж дуусгаад одоо пуужингаа бүтээхээр хөрөнгө
          босгох үе шат дээр явж байна. Та бүхнийг бидэнд туслана гэдэгт
          итгэлтэй байна
        </div>
        <div className="launch">
          <p className="launchDay">Хөөргөх өдөр</p>
          <p
            className="day"
            style={{ color: "#00B65F", fontSize: "1.5vw", marginTop: "0.8vw" }}
          >
            2021 / 03 / 03
          </p>
        </div>
      </div>
      <div className="timelineMain">
        <div className="firstRow">
          <div className="rowContent">ТӨСӨЛ ЭХЛЭХ</div>
          <div className="rowContent" style={{ marginLeft: "4vw" }}>
            ТООЦОЛЛЫГ ХИЙЖ ЭХЛЭВ
          </div>
          <div className="rowContent" style={{ marginLeft: "3.8vw" }}>
            СТАТИК ТЕСТ #1
          </div>
          <div className="rowContent">ХӨӨРГӨХ ТАВЦАНГ БЭЛДЭХ</div>
        </div>
        <div className="lineContainer" style={{ position: "relative" }}>
          <img
            src={left}
            alt="left arrow"
            style={{ marginRight: "20px", width: "2.4vw", cursor: "pointer" }}
            className="leftArrow"
            onClick={() => setWich(wich === 1 ? 1 : wich - 2)}
          />
          <img src={rocket} alt="rocket" className="timeRocket" id="rocket" />
          <div className="line lineLeft" id="0" />
          <div
            className="timeDot active pointer"
            onClick={() => setWich(1)}
            id="1"
          />
          <div className="line" id="2" />
          <div className="timeDot pointer" onClick={() => setWich(3)} id="3" />
          <div className="line" id="4" />
          <div className="timeDot pointer" onClick={() => setWich(5)} id="5" />
          <div className="line" id="6" />
          <div className="timeDot pointer" onClick={() => setWich(7)} id="7" />
          <div className="line" id="8" />
          <div className="timeDot pointer" onClick={() => setWich(9)} id="9" />
          <div className="line" id="10" />
          <div
            className="timeDot pointer"
            onClick={() => setWich(11)}
            id="11"
          />
          <div className="line" id="12" />
          <div
            className="timeDot pointer"
            onClick={() => setWich(13)}
            id="13"
          />
          <div className="line" id="14" />
          <div
            className="timeDot pointer"
            onClick={() => setWich(15)}
            id="15"
          />
          <div className="line lineRight" id="16" />
          <img
            src={right}
            alt="right arrow"
            style={{ marginLeft: "20px", width: "2.4vw", cursor: "pointer" }}
            onClick={() => setWich(wich === 15 ? 15 : wich + 2)}
          />
        </div>
        <div className="secondRow">
          <div className="rowContent" style={{ marginLeft: "8.5vw" }}>
            БАГ БҮРДҮҮЛЭЛТ ЭХЛЭВ
          </div>
          <div className="rowContent" style={{ marginLeft: "2.5vw" }}>
            ПУУЖИНГ УГСРАХ ӨДӨР
          </div>
          <div className="rowContent" style={{ marginLeft: "3vw" }}>
            ДИНАМИК ТЕСТ #1
          </div>
          <div className="rowContent" style={{ marginLeft: "4vw" }}>
            НИСЛЭГИЙН ӨДӨР
          </div>
        </div>
      </div>
      <TimeLineHistory id={(wich - (wich % 2)) / 2 + 1} />
    </div>
  );
};
