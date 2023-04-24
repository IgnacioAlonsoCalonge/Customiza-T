import './Home.css'
import Section_1 from './Section_1/Section_1' 
import Section_2 from './Section_2/Section_2' 
import Section_3 from './Section_3/Section_3' 
import Section_4 from './Section_4/Section_4' 
import Section_5 from './Section_5/Section_5' 

const Home = (props) => {
  return (
    <div className='home'>
        <Section_1 imagen={props.imagen}/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
        <Section_5/>

    </div>
  )
}

export default Home