import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210311T183156Z&X-Amz-Expires=86400&X-Amz-Signature=18561abde65d728ffaaae0561cc5f68c00cb5c189b87158a4258b97a3bbee1f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22' alt={''}/>
        <Header title='This is title' descr='This is Description!'/>
        <Layout title ='' descr ='' urlBg ='' colorBg=''/>
        <Layout title ='' descr ='' urlBg ='' colorBg=''/>
        <Layout title ='' descr ='' urlBg ='' colorBg=''/>
        <Footer/>


    </div>

  );
}

export default App;
