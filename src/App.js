import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Publications from './Components/Publications';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        
        <Resume data={this.state.resumeData.resume}/>
        <Publications data={this.state.resumeData.publications} /> {/* Add the Publications component */}
        <Footer data={this.state.resumeData.main}/>
        
        {/* <Contact data={this.state.resumeData.main}/> 
        <About data={this.state.resumeData.main}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        
        */}
      </div>
    );
  }
}

export default App;
