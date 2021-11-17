import React, { Component } from 'react';
import Box from '@tds/core-box';
import Notification from '@tds/core-notification';
import Text from '@tds/core-text';

// from React docs
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box inset={5}>
          <Notification variant="error" copy="en">
            <Text bold>
              Looks like there was a problem loading the devices.
            </Text>{' '}
            Please try reloading the page or coming back later.
          </Notification>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
