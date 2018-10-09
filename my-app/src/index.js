import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown } from 'semantic-ui-react';

class TopMenu extends React.Component {

  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"></Image>
            <Menu.Item fitted position ="right">Home</Menu.Item>

            <Dropdown item text = "About Us"></Dropdown>

            <Menu.Item >St. Patricks Day</Menu.Item>

            <Dropdown item text = "Menus"></Dropdown>

            <Menu.Item fitted>Bar</Menu.Item>
            <Dropdown item text = "" icon = "search"></Dropdown>
          </Container>
        </Menu>
  );
  }
}

class BackgroundImage extends React.Component {
  render() {
    return (
        <Image src={"http://murphyshawaii.com/media/2014/04/murphys-front.jpg"} fluid-image/>
    )
  }
}

class FooterMenu extends React.Component{
  render(){
    return(
    <Menu borderless className="footermenu">
    </Menu>

    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <BackgroundImage/>
          <FooterMenu/>
        </div>
    );
  }
}


ReactDOM.render(<Murphys/>, document.getElementById('root'));