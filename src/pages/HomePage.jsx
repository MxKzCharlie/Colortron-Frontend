import Content from "../components/homePage/Content"
import Header from "../components/homePage/Header"
import Footer from '../components/Footer'

function HomePage() {
    return (  
        <div className="sizeScreen grid grid-rows-customHome bg-mainBg">
            <Header/>
            <Content />
            <Footer />
        </div>
    );
}

export default HomePage;