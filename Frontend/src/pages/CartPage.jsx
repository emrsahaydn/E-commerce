import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ShoppingCart from "../components/ShoppingCart";

function CartPage(){
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow">
                <ShoppingCart />
            </main>
            <Footer/>
        </div>
    )
}

export default CartPage;