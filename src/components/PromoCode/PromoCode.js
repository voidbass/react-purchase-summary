import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Well,
  Form,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

export default class PromoCode extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      value: ''
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>{' '}
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </FormGroup>{' '}
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      // type="submit"
                      onClick={() => console.log(this.state.value)}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
