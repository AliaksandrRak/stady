import React from 'react';
import Header from '../header/Header'
import './homeStyle.sass';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomeClass extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    
    return (
        <div key="homePage" className="homeBackground">
            <Header />
            <div className="startWindow">
                <h2 className="helloWord">Найди свой вкус</h2>
                <p className="descriptionText">Исследуйте новые гастрономические нотки, которые позволят окунуться в мир высокой кухни.</p>
                {/* <div className="serch">
                    <div className="button">
                    <Link to="/search" className="text">Поиск</Link>
                    </div>
                </div> */}
            </div>
            <div id="aboutUs"  className="homeContainer">
                <h3 className="title">О нас</h3>
                <p className="description">Дорогие Господа!
Мы, коллектив сервиса "RESTAURANTS", предлагаем вам воплотить все ваши самые изысканные кулинарные желания в жизнь, посредством поиска и выбора самых топовых ресторанов Минска. 
На ваше усмотрение будут представлены рестораны, испытанные самыми избалованными гостями, пережившие самые  тщательные проверки и отвоевавшие тем самым звания лучших заведений города с высокой кухней.
Удачного поиска и приятного аппетита!</p>
            </div>
        </div>
    );
  }
}


const Home = connect(
  (state) => ({
    mainReduser: state.mainReduser,
  }),
)(HomeClass);
export default Home;