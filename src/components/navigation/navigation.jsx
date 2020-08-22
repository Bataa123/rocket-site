// import React from 'react'

// export const Navigation = () => {

//     return (

//     )
// }


import React from 'react';
import './navigation.scss'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export function Navigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemText onClick={() =>
          document.getElementById('ourProject').scrollIntoView({
            behavior: 'smooth'
          })
        }
          className="menuText">
          Our project
        </ListItemText>
        <ListItemText className="menuText">
          Our goal
        </ListItemText>
        <ListItemText className="menuText">
          Our team
        </ListItemText>
        <ListItemText className="menuText">
          Timeline
        </ListItemText>
        <ListItemText className="menuText">
          Our sponsor
        </ListItemText>
        <ListItemText className="menuText">
          Universities
        </ListItemText>
        <ListItemText className="menuText">
          Donate
        </ListItemText>
        <ListItemText className="menuText">
          Contact us
        </ListItemText>
      </List>
      <Divider />
      <List>

      </List>
    </div>
  );

  return (
    <div className="nav">
      <div className="text padding">
        Gobi Space
    </div>
      <div className="padding">
        <React.Fragment key={"right"}>
          <MenuIcon fontSize="large" style={{ color: 'white' }} onClick={toggleDrawer('right', true)} />
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>

      </div>

    </div>
  );
}





