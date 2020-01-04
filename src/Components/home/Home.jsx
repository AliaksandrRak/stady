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
                {/* <div className="serch">
                    <div className="button">
                    <Link to="/search" className="text">Поиск</Link>
                    </div>
                </div> */}
            </div>
            <div id="aboutUs"  className="homeContainer">
                <h3 className="title">О нас</h3>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, nesciunt. Omnis est accusamus perferendis aspernatur, ipsa corporis. Ipsam debitis officiis perspiciatis voluptatum tempore consectetur neque, dolorum illo dolorem et suscipit?
                Molestias laborum expedita facere amet temporibus nam laudantium sequi quas ullam qui perferendis harum fugit nemo quidem provident omnis, natus totam iusto earum assumenda necessitatibus porro vitae voluptatibus dolorum? Quas?
                Obcaecati laudantium nobis esse dicta culpa rem sed id dignissimos eaque, atque, quae commodi pariatur! Non maxime tenetur dignissimos, distinctio incidunt animi, fugit repellat quasi sed porro aliquid explicabo dolorum.
                Architecto quasi libero doloribus ipsa vel velit nam molestias adipisci quisquam ab rem quod accusantium perspiciatis optio omnis eligendi, vero recusandae quibusdam voluptates dolorem eveniet voluptatum, atque soluta deleniti! Nihil.
                A voluptatibus, et laudantium voluptates ad porro vitae repellendus eos, unde at nam hic quas aspernatur doloribus voluptatum veniam. Beatae quisquam veniam odit expedita ducimus necessitatibus sed aperiam, temporibus fugit.</p>
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