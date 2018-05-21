import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import './App.css';

// Import redux provider
import { Provider, connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';
// Import store.js
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 102.96,
      taxes: 0,
      pickupSavings: -3.85,
      estimatedTotal: 0
    };
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({ total: this.state.total * 0.9 });
      alert(`You're getting a discount`);
    }
  };

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Grid className="purchase-card">
            <SubTotal price={this.state.total.toFixed(2)} />
            <PickupSavings price={this.state.pickupSavings} />
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
            <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
            <hr />
            <PromoCodeDiscount
              giveDiscount={() => this.giveDiscountHandler()}
            />
          </Grid>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {
  handleChange
})(App);
