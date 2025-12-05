import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";

function PageContent() {
  return (
    <main className="w-full">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
        <Route path="/product" component={ProductDetailPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </main>
  );
}

export default PageContent;
