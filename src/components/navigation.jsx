import React from "react";
import { SideBar } from "./sidebar";
import { TopBar } from "./topBar";

export const Navigation = () => {
  const width = window.innerWidth;

  // //     return (

  // //     )
  // // }

  // import React from 'react';
  // import './navigation.scss'
  // import clsx from 'clsx';
  // import { makeStyles } from '@material-ui/core/styles';
  // import Drawer from '@material-ui/core/Drawer';
  // import List from '@material-ui/core/List';
  // import Divider from '@material-ui/core/Divider';
  // import MenuIcon from '@material-ui/icons/Menu';
  // import { ListItemText } from '@material-ui/core';

  // const useStyles = makeStyles({
  //   list: {
  //     width: 250,
  //   },
  //   fullList: {
  //     width: 'auto',
  //   },
  // });

  // export function Navigation() {
  //   const classes = useStyles();
  //   const [state, setState] = React.useState({
  //     right: false,
  //   });

  //   const toggleDrawer = (anchor, open) => (event) => {
  //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
  //     setState({ [anchor]: open });
  //   };

  //   const list = (anchor) => (
  //     <div
  //       className={clsx(classes.list, {
  //         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //       })}
  //       role="presentation"
  //       onClick={toggleDrawer(anchor, false)}
  //       onKeyDown={toggleDrawer(anchor, false)}
  //     >
  //       <List>
  //         {/* <div className="text padding" style={{color: 'black'}} >GOBI SPACE</div> */}
  //         <ListItemText
  //           onClick={() =>
  //             document.getElementById('ourProject').scrollIntoView({
  //               behavior: 'smooth'
  //             })
  //           }
  //           className="menuText">
  //           Our project
  //         </ListItemText>
  //         <ListItemText onClick={() =>
  //           document.getElementById('ourGoal').scrollIntoView({
  //             behavior: 'smooth'
  //           })
  //         }
  //           className="menuText">
  //           Our goal
  //         </ListItemText>
  //         <ListItemText onClick={() =>
  //           document.getElementById('ourTeam').scrollIntoView({
  //             behavior: 'smooth'
  //           })
  //         }
  //           className="menuText">
  //           Our team
  //         </ListItemText>
  //         <ListItemText
  //           onClick={() =>
  //             document.getElementById('timeLine').scrollIntoView({
  //               behavior: 'smooth'
  //             })
  //           }
  //           className="menuText">
  //           Timeline
  //         </ListItemText>
  //         <ListItemText
  //           onClick={() =>
  //             document.getElementById('sponsor').scrollIntoView({
  //               behavior: 'smooth'
  //             })
  //           }
  //           className="menuText">
  //           Our sponsor
  //         </ListItemText>
  //         <ListItemText
  //           onClick={() =>
  //             document.getElementById('unis').scrollIntoView({
  //               behavior: 'smooth'
  //             })
  //           }
  //           className="menuText">
  //           Universities
  //         </ListItemText>
  //         <ListItemText
  //           onClick={() =>
  //             document.getElementById('donation').scrollIntoView({
  //               behavior: 'smooth'
  //             })
  //           }
  //           className="menuText">
  //           Donate
  //         </ListItemText>
  //         <ListItemText
  //           onClick={() =>
  //             document.getElementById('contact').scrollIntoView({
  //               behavior: 'smooth'
  //             })
  //           }
  //           className="menuText">
  //           Contact us
  //         </ListItemText>
  //       </List>
  //       <Divider style={{ width: '100%' }} />
  //       <List>
  //         <svg className="social" style={{ cursor: 'pointer', padding: '15px' }} onClick={() => window.open("https://www.facebook.com/20000m-above-the-Gobi-Desert-111550123772413/", '_blank')} width="25" height="25" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M6.54093 7.81651L6.90335 5.30153H4.63445V3.66972C4.63445 2.98226 4.95085 2.3107 5.96795 2.3107H7V0.170031C7 0.170031 6.06345 0 5.16831 0C3.2998 0 2.07791 1.20367 2.07791 3.38471V5.30153H0V7.81651H2.07791V13.8948C2.49441 13.9645 2.92127 14 3.35618 14C3.79109 14 4.21795 13.9633 4.63445 13.8948V7.81651H6.54093Z" fill="black" />
  //         </svg>
  //         <svg className="social" style={{ cursor: 'pointer', padding: '15px' }} onClick={() => window.open("https://www.instagram.com/gobi.space/", '_blank')} width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M13.0246 4.06072C12.994 3.32684 12.8818 2.82231 12.7211 2.38512C12.5552 1.92106 12.3001 1.50559 11.9658 1.1602C11.6392 0.809445 11.2438 0.53689 10.81 0.36425C10.3942 0.194246 9.91966 0.0755693 9.22571 0.0432126C8.52658 0.00811553 8.30463 0 6.53145 0C4.75826 0 4.53631 0.00811553 3.83978 0.0404723C3.14583 0.072829 2.66875 0.191611 2.25545 0.36151C1.81654 0.53689 1.42367 0.806705 1.09708 1.1602C0.765404 1.50559 0.507778 1.9238 0.344432 2.38249C0.183677 2.82231 0.0714576 3.3241 0.0408614 4.05798C0.00767397 4.79733 0 5.03205 0 6.90727C0 8.78248 0.00767397 9.0172 0.0382702 9.75382C0.0688664 10.4877 0.181185 10.9922 0.34194 11.4294C0.507778 11.8935 0.765404 12.3089 1.09708 12.6543C1.42367 13.0051 1.81913 13.2776 2.25286 13.4503C2.66875 13.6203 3.14324 13.739 3.83729 13.7713C4.53372 13.8038 4.75577 13.8118 6.52896 13.8118C8.30214 13.8118 8.52409 13.8038 9.22063 13.7713C9.91457 13.739 10.3917 13.6203 10.805 13.4503C11.6827 13.0914 12.3766 12.3575 12.716 11.4294C12.8766 10.9896 12.9889 10.4877 13.0195 9.75382C13.0501 9.0172 13.0578 8.78248 13.0578 6.90727C13.0578 5.03205 13.0552 4.79733 13.0246 4.06072ZM11.8485 9.69985C11.8204 10.3744 11.7133 10.7386 11.624 10.9815C11.4045 11.5832 10.953 12.0607 10.384 12.2928C10.1544 12.3873 9.80744 12.5006 9.17209 12.5302C8.48323 12.5626 8.27663 12.5706 6.53404 12.5706C4.79145 12.5706 4.58226 12.5626 3.89589 12.5302C3.25805 12.5006 2.91362 12.3873 2.684 12.2928C2.40086 12.1822 2.14313 12.0068 1.93394 11.7774C1.71708 11.5535 1.55124 11.2836 1.44659 10.9842C1.3573 10.7414 1.25016 10.3744 1.22216 9.70259C1.19146 8.97409 1.18388 8.7555 1.18388 6.91264C1.18388 5.06978 1.19146 4.84856 1.22216 4.1228C1.25016 3.44826 1.3573 3.08401 1.44659 2.84117C1.55124 2.54164 1.71708 2.26919 1.93653 2.04785C2.14821 1.81851 2.40335 1.64313 2.68659 1.53257C2.91621 1.43814 3.26323 1.32483 3.89848 1.29511C4.58734 1.26276 4.79404 1.25464 6.53653 1.25464C8.28171 1.25464 8.48831 1.26276 9.17468 1.29511C9.81252 1.32483 10.157 1.43814 10.3866 1.53257C10.6697 1.64313 10.9274 1.81851 11.1366 2.04785C11.3535 2.27182 11.5193 2.54164 11.624 2.84117C11.7133 3.08401 11.8204 3.45089 11.8485 4.1228C11.8791 4.8513 11.8868 5.06978 11.8868 6.91264C11.8868 8.7555 11.8791 8.97135 11.8485 9.69985Z" fill="black" />
  //           <path d="M6.5318 3.35986C4.67957 3.35986 3.17676 4.9489 3.17676 6.90764C3.17676 8.86637 4.67957 10.4554 6.5318 10.4554C8.38413 10.4554 9.88685 8.86637 9.88685 6.90764C9.88685 4.9489 8.38413 3.35986 6.5318 3.35986ZM6.5318 9.20899C5.33017 9.20899 4.35547 8.1784 4.35547 6.90764C4.35547 5.63687 5.33017 4.60628 6.5318 4.60628C7.73353 4.60628 8.70814 5.63687 8.70814 6.90764C8.70814 8.1784 7.73353 9.20899 6.5318 9.20899V9.20899Z" fill="black" />
  //           <path d="M10.802 3.21805C10.802 3.67552 10.4512 4.04645 10.0186 4.04645C9.58607 4.04645 9.23535 3.67552 9.23535 3.21805C9.23535 2.76047 9.58607 2.38965 10.0186 2.38965C10.4512 2.38965 10.802 2.76047 10.802 3.21805V3.21805Z" fill="black" />
  //         </svg>
  //       </List>
  //       <Divider style={{ width: '100%' }} />
  //       <List>
  //         <div style={{ color: 'black', padding: '15px' }} className="copyright">© Copyright 2020</div>
  //       </List>
  //     </div>
  //   );

  //   return (
  //     <div className="nav">
  //       <div className="textNav padding">
  //         Gobi Space
  //     </div>
  //       <div className="padding">
  //         <React.Fragment key={"right"}>
  //           <MenuIcon className="icon " fontSize="large" style={{ color: 'white', cursor: 'pointer' }} onClick={toggleDrawer('right', true)} />
  //           <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
  //             {list('right')}
  //           </Drawer>
  //         </React.Fragment>

  //       </div>

  //     </div>
  // //   );

  if (width >= 600) return <></>;
  else
    return (
      <div className="nav">
        <SideBar />
      </div>
    );
};
