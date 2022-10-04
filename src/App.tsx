import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonList from "./pages/pokemon-list";
import PageNotFound from "./pages/pokemon-not-found";

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route exact path="/pokemon/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;