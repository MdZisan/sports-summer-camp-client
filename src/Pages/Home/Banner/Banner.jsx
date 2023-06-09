import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
    
            <Carousel>
                <div>
                    <img src="https://img.freepik.com/premium-vector/summer-camp-schoolchildren-happy-children-running-jumping-background-open-field-with-coniferous-forest-sky-flat-vector-illustration_65580-481.jpg?w=740" />
                  
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1505748641491-f7ee2fd6fb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1472745942893-4b9f730c7668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" />
                   
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1670002216960-23193b9ebf96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                    
                </div>
               
            </Carousel>  
       
    );
};

export default Banner;