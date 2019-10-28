import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class HelloWorld extends React.Component {
    render() {
      return (
        <div>
          <Button bsStyle="info">Click this button</Button>
        </div>
        );
    }
}
