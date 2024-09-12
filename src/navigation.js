import React from "react";
function Navigation(props)//passing the data forom one component to another component 
{
return(
    <nav className='nav'>
        <span><a href="#home">{props.title}</a></span>
        <span><a href="#about">About Us</a></span>
        <span><a href="#contact">Contact</a></span>
        <span><a href="#service">Service</a></span>
        <div className="search-bar">
            <input type="search" placeholder="search here"/>
               < button>Go</button>
            </div>
    </nav>
)
};
Navigation.defaultProps={title:"react"}
export default Navigation;