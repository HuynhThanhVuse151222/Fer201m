import './App.css';
import Footer from './components/Footer';

import Main from './components/Main';
import Navigation from './components/Navigation';

function WebFilms() {
    return (
      <div className="WebFilms">
       <Navigation/> 
       <Main/>
     <Footer/>
      </div>
    );
  }
  
  // class Content extends React.Component{
  //   componentWillMount(){
  //     console.log()
  //   }
  // }
  export default WebFilms;