import { Fragment } from 'react';
// ui user
import LayoutUser from './layout/user';
import HomePage from './pages/user/homePage';
import RecommendPage from './pages/user/recommendPage';
import ContactPage from './pages/user/contactPage';
import ProductsPage from './pages/user/productsPage';
import LoginPage from './pages/user/loginPage';
import RegisterPage from './pages/user/registerPage';
import ForgotPasswordPage from './pages/user/forgotPasswordPage';
import DetailProductPage from './pages/user/detailProductPage';
import LayoutManageUser from './pages/user/managePage';
import Cart from './components/user/cart';
import ProfileUser from './components/user/profile';
import OrderList from './components/user/order';
import PayMent from './components/user/payment';
import NewsPage from './pages/user/newsPage';
import ListNews from './components/user/news/listNews';
import DetailNews from './components/user/news/detailNews';
// end ui user

// ui admin
import LayoutAdmin from './layout/admin';
// end ui admin
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Fragment>
        <Routes>
            {/* router user */}
            <Route path="/user" element={<LayoutUser/>}>
                <Route path="contact" element={<ContactPage/>} />
                <Route path="recommend" element={<RecommendPage/>} />
                <Route path="product" element={<ProductsPage/>} />
                <Route path="detail" element={<DetailProductPage/>} />
                <Route path="home" element={<HomePage/>} />
                <Route path="news" element={<NewsPage/>}>
                    <Route path="detail" element={<DetailNews/>}/>
                    <Route index element={<ListNews/>}/>
                </Route>
                <Route path="manage" element={<LayoutManageUser/>}>
                    <Route path="account" element={<ProfileUser/>}/>
                    <Route path="order" element={<OrderList/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="payment" element={<PayMent/>}/>
                </Route>
                <Route index element={<HomePage/>} />
            </Route>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
            {/* end router user */}

            {/* router admin */}
            <Route path='/admin' element={<LayoutAdmin/>}>
                
            </Route>
            {/* end router admin */}
        </Routes>
    </Fragment>
  );
}

export default App;
