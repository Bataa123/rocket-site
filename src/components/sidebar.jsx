import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItemText } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/backgrounds/logo.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const SideBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemText
          id="ListItemText"
          onClick={() =>
            document.getElementById("ourProject").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Our project
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("ourGoal").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Our goal
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("ourTeam").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Our team
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("timeLine").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Timeline
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("sponsor").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Our sponsor
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("unis").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Universities
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("donation").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Donate
        </ListItemText>
        <ListItemText
          onClick={() =>
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="menuText"
        >
          Contact us
        </ListItemText>
      </List>
      <Divider style={{ width: "100%" }} />
      <List
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "3vw",
        }}
      >
        <svg
          className="social"
          style={{ cursor: "pointer", padding: "15px" }}
          onClick={() =>
            window.open(
              "https://www.facebook.com/20000m-above-the-Gobi-Desert-111550123772413/",
              "_blank"
            )
          }
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9916 5.32083H17.9999V2.14083C17.6534 2.0975 16.4618 2 15.0741 2C12.1786 2 10.1951 3.65583 10.1951 6.69917V9.5H6.99988V13.055H10.1951V22H14.1126V13.0558H17.1786L17.6653 9.50083H14.1117V7.05167C14.1126 6.02417 14.4169 5.32083 15.9916 5.32083Z"
            fill="white"
          />
        </svg>

        <svg
          className="social"
          style={{ cursor: "pointer", padding: "15px" }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/20000m_above_the_gobi_desert/",
              "_blank"
            )
          }
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9455 7.88007C21.8986 6.81739 21.7268 6.08681 21.4806 5.45375C21.2266 4.78177 20.8359 4.18015 20.324 3.68002C19.8239 3.17211 19.2183 2.77744 18.5541 2.52745C17.9174 2.28128 17.1906 2.10943 16.128 2.06257C15.0574 2.01175 14.7175 2 12.0021 2C9.28672 2 8.94684 2.01175 7.88019 2.05861C6.81751 2.10546 6.08693 2.27746 5.45402 2.52348C4.78189 2.77744 4.18027 3.16814 3.68014 3.68002C3.17223 4.18015 2.77771 4.78574 2.52757 5.44993C2.2814 6.08681 2.10955 6.81342 2.0627 7.8761C2.01187 8.94672 2.00012 9.2866 2.00012 12.002C2.00012 14.7174 2.01187 15.0572 2.05873 16.1239C2.10558 17.1866 2.27758 17.9172 2.52375 18.5502C2.77771 19.2222 3.17223 19.8238 3.68014 20.3239C4.18027 20.8319 4.78586 21.2265 5.45005 21.4765C6.08693 21.7227 6.81354 21.8945 7.87637 21.9414C8.94287 21.9884 9.2829 22 11.9983 22C14.7137 22 15.0535 21.9884 16.1202 21.9414C17.1829 21.8945 17.9134 21.7227 18.5464 21.4765C19.8905 20.9569 20.9531 19.8942 21.4728 18.5502C21.7188 17.9133 21.8908 17.1866 21.9377 16.1239C21.9845 15.0572 21.9963 14.7174 21.9963 12.002C21.9963 9.2866 21.9923 8.94672 21.9455 7.88007ZM20.1444 16.0458C20.1014 17.0225 19.9373 17.55 19.8006 17.9016C19.4645 18.7729 18.773 19.4644 17.9017 19.8005C17.5501 19.9372 17.0188 20.1013 16.0459 20.1442C14.991 20.1912 14.6746 20.2028 12.0061 20.2028C9.33754 20.2028 9.01719 20.1912 7.96611 20.1442C6.98936 20.1013 6.46191 19.9372 6.11028 19.8005C5.67669 19.6402 5.28202 19.3863 4.96167 19.0542C4.62958 18.7299 4.37562 18.3391 4.21537 17.9056C4.07863 17.5539 3.91456 17.0225 3.87168 16.0497C3.82467 14.9948 3.81307 14.6783 3.81307 12.0098C3.81307 9.34124 3.82467 9.02089 3.87168 7.96996C3.91456 6.99321 4.07863 6.46576 4.21537 6.11413C4.37562 5.68039 4.62958 5.28587 4.96564 4.96537C5.2898 4.63327 5.68051 4.37932 6.11425 4.21922C6.46588 4.08247 6.99729 3.91841 7.97008 3.87537C9.02498 3.82852 9.34151 3.81677 12.0099 3.81677C14.6824 3.81677 14.9987 3.82852 16.0498 3.87537C17.0266 3.91841 17.554 4.08247 17.9057 4.21922C18.3393 4.37932 18.7339 4.63327 19.0543 4.96537C19.3864 5.28968 19.6403 5.68039 19.8006 6.11413C19.9373 6.46576 20.1014 6.99702 20.1444 7.96996C20.1913 9.02486 20.203 9.34124 20.203 12.0098C20.203 14.6783 20.1913 14.9909 20.1444 16.0458Z"
            fill="white"
          />
          <path
            d="M12.0021 6.86426C9.16565 6.86426 6.86432 9.16544 6.86432 12.002C6.86432 14.8386 9.16565 17.1397 12.0021 17.1397C14.8386 17.1397 17.1398 14.8386 17.1398 12.002C17.1398 9.16544 14.8386 6.86426 12.0021 6.86426ZM12.0021 15.3347C10.1619 15.3347 8.66933 13.8423 8.66933 12.002C8.66933 10.1617 10.1619 8.66927 12.0021 8.66927C13.8423 8.66927 15.3348 10.1617 15.3348 12.002C15.3348 13.8423 13.8423 15.3347 12.0021 15.3347Z"
            fill="white"
          />
          <path
            d="M18.5425 6.66134C18.5425 7.32371 18.0054 7.86077 17.3429 7.86077C16.6806 7.86077 16.1435 7.32371 16.1435 6.66134C16.1435 5.99883 16.6806 5.46191 17.3429 5.46191C18.0054 5.46191 18.5425 5.99883 18.5425 6.66134Z"
            fill="white"
          />
        </svg>
      </List>
    </div>
  );
  return (
    <div className="sideBar">
      <div className="gobi" style={{ backgroundImage: `url(${logo})` }}></div>
      <React.Fragment key={"right"}>
        <MenuIcon
          className="icon"
          fontSize="large"
          style={{ color: "white", cursor: "pointer" }}
          onClick={toggleDrawer("right", true)}
        />
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
