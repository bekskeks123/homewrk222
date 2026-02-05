import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';


function App() {
return (
<div className="app">
<Header />
<main className="app__main">
<Posts />
</main>
<Footer />
</div>
);
}


export default App;