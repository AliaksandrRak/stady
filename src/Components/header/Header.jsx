import React from 'react';
import './headerStyle.sass';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HeaderClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayLink: [
                {
                    name: "Главная", link: "/home", massLink: [
                        {
                            title: "Trans-European Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Paris',
                                'Moscow-Berlin',
                                'ISt Petersburg-Tallinn',
                                'Nice-Moscow',
                            ]
                        },
                        {
                            title: "Trans-Siberian Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Ulan-Bato',
                                'Beijing-Ircutsk',
                                'Ircutsk-Beijing',
                                'ISt Petersburg-Moscow',
                                'Nizhny Novgorod-Moscow',
                            ]
                        },
                        {
                            title: "Popular routes",
                            items: [
                                'Moscow-St.Petersburg',
                                'St.Petersburg-Moscow',
                                'Helsinki-St.Petersburg',
                                'St.Petersburg-Helsinki',
                                'Moscow-Nizhny Novgorod',
                                'Nizhny Novgorod-Moscow',
                            ]
                        }
                    ]
                },
                {
                    name: "Поиск", link: "/home", massLink: [
                        {
                            title: "Trans-European Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Paris',
                                'Moscow-Berlin',
                                'ISt Petersburg-Tallinn',
                                'Nice-Moscow',
                            ]
                        },
                        {
                            title: "Trans-Siberian Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Ulan-Bato',
                                'Beijing-Ircutsk',
                                'Ircutsk-Beijing',
                                'ISt Petersburg-Moscow',
                                'Nizhny Novgorod-Moscow',
                            ]
                        }
                    ]
                },
                {
                    name: "Помощь", link: "/help", massLink: [
                        {
                            title: "Popular routes",
                            items: [
                                'Moscow-St.Petersburg',
                                'St.Petersburg-Moscow',
                                'Helsinki-St.Petersburg',
                                'St.Petersburg-Helsinki',
                                'Moscow-Nizhny Novgorod',
                                'Nizhny Novgorod-Moscow',
                            ]
                        }
                    ]
                },

                {
                    name: "Контакты", link: "/contacts", massLink: [
                        {
                            title: "Trans-Siberian Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Ulan-Bato',
                                'Beijing-Ircutsk',
                                'Ircutsk-Beijing',
                                'ISt Petersburg-Moscow',
                                'Nizhny Novgorod-Moscow',
                            ]
                        }
                    ]
                },
                {
                    name: "О нас", link: "#aboutUs", massLink: [
                        {
                            title: "Trans-European Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Paris',
                                'Moscow-Berlin',
                                'ISt Petersburg-Tallinn',
                                'Nice-Moscow',
                            ]
                        },
                        {
                            title: "Trans-Siberian Tours",
                            items: [
                                'Moscow-Beijing',
                                'Moscow-Ulan-Bato',
                                'Beijing-Ircutsk',
                                'Ircutsk-Beijing',
                                'ISt Petersburg-Moscow',
                                'Nizhny Novgorod-Moscow',
                            ]
                        },
                        {
                            title: "Popular routes",
                            items: [
                                'Moscow-St.Petersburg',
                                'St.Petersburg-Moscow',
                                'Helsinki-St.Petersburg',
                                'St.Petersburg-Helsinki',
                                'Moscow-Nizhny Novgorod',
                                'Nizhny Novgorod-Moscow',
                            ]
                        }
                    ]
                },
            ],
            activeLink: "",
            burgerMenuOpen: false,

        }
    }

    componentDidMount() {
        let pathname = window.location.pathname
        this.setState({ activeLink: pathname })
    }

    render() {

        return (
            <>
                <div className="header">
                    <div className="logoContain">
                        <Link to="/home" className="logoLink">Restaurants</Link>
                    </div>
                    <div className="arrayLink">
                        {
                            this.state.arrayLink.map((el, index) => {
                                if (el.link === "#aboutUs") {
                                    return (

                                        <div key={el.name + index} className='linkContain'>
                                            <a href={"/home/" + el.link} onClick={() => { this.setState({ activeLink: el.link }) }} className={this.state.activeLink === el.link ? "linkitem linkitem-active" : "linkitem"}>{el.name}</a>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={el.name + index} className='linkContain'>
                                            <Link to={el.link} onClick={() => { this.setState({ activeLink: el.link }) }} className={this.state.activeLink === el.link ? "linkitem linkitem-active" : "linkitem"}>{el.name}</Link>
                                            <div className="burgerBlock">
                                                {el.massLink.map((element, index) =>
                                                    <div className="burgerContain">
                                                        <span className="titleBurgerList">{element.title}</span>
                                                        <div className="burgerListItems">
                                                            {element.items.map((el, ind) =>
                                                                <span className="itemBurgerList">{el}</span>
                                                            )}
                                                        </div>

                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    )
                                }
                            }

                            )
                        }
                    </div>
                    <div className="burgerMenu">
                        <i className="burgerIcon" onClick={() => { this.setState({ burgerMenuOpen: !this.state.burgerMenuOpen }) }} />
                    </div>

                </div>
                <div className="burgerMenuBlock" style={{ display: this.state.burgerMenuOpen ? "flex" : "none" }}>
                    <div className="burgerMenuHeader">
                        <h3>Menu</h3>
                        <span onClick={() => { this.setState({ burgerMenuOpen: false }) }} ></span>
                    </div>
                    <div className="burgerMenuContant">
                        <div className="burgerMenuLinkList">
                            {
                                this.state.arrayLink.map((el, index) => {
                                    if (el.link === "#aboutUs") {
                                        return (
                                            <div key={el.name + index} className='linkContain' onClick={() => { this.setState({ burgerMenuOpen: false }) }}>
                                                <a href={"/home/" + el.link} onClick={() => { this.setState({ activeLink: el.link }) }} className={this.state.activeLink === el.link ? "linkitem linkitem-active" : "linkitem"}>{el.name}</a>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={el.name + index} className='linkContain'>
                                                <Link to={el.link} onClick={() => { this.setState({ activeLink: el.link }) }} className={this.state.activeLink === el.link ? "linkitem linkitem-active" : "linkitem"}>{el.name}</Link>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


const Header = connect(
    (state) => ({
        mainReduser: state.mainReduser,
    }),
)(HeaderClass);
export default Header;