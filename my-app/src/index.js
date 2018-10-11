import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Image, Icon, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { fontFamily: "monospace", fontSize: "20px", color: "white", };
    return (
        <Menu borderless style={{ margin: "0px" }} className="topmenu">
          <Container>
            <Menu.Item><Image src="http://luckybelly.com/img/lucky-logo-light.png"/></Menu.Item>
            <Menu.Item style={itemStyle} position="right">Menus</Menu.Item>
            <Menu.Item style={itemStyle}>Info</Menu.Item>
            <Menu.Item style={itemStyle}>Contact</Menu.Item>
            <Menu.Item style={itemStyle}>Breaking Bread Hospitality</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleImage extends React.Component {
  render() {
    return (
        <Image fluid style={{ margin: "0px" }} src="http://luckybelly.com/img/bellybowl.jpg"/>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid padded columns={3}>
            <Grid.Column>
              <Image size="medium" src="http://luckybelly.com/img/lucky-logo-light.png"/>
            </Grid.Column>
            <Grid.Column>
              Links
              <hr/>
              <List>
                <List.Item>Hours</List.Item>
                <List.Item>Menus</List.Item>
                <List.Item>Reservations</List.Item>
                <List.Item>Corkage</List.Item>
                <List.Item>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
Contact
              <hr/>
              <List>
                <List.Item>808-531-1888</List.Item>
                <List.Item>eaat@luckybelly.com</List.Item>
                <List.Item>50 N. Hotel St. Honolulu, HI 96817</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class LuckyBelly extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleImage/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<LuckyBelly/>, document.getElementById('root'));
