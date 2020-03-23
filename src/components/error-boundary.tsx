import React from "react";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: 'https://4d0fad4157b14d46af354f5158e5e69c@sentry.io/1801028',
  environment: process.env.CONTEXT || 'development', // from netlify
  release: process.env.DEPLOY_ID // from netlify
});

interface IErrorBoundaryProps {
  fallback?: React.ReactNode;
}

interface IErrorBoundaryState {
  error?: any;
}

const DefaultErrorComponent: React.FC = () => {
  return <div>An error has occurred.</div>;
};

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error | null, errorInfo: object) {
    this.setState({ error });

    console.warn("ErrInfo:", errorInfo);
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, (errorInfo as any)[key]);
      });

      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return this.props.fallback || <DefaultErrorComponent />;
    } else {
      // when there's not an error, render children untouched
      return this.props.children;
    }
  }
}
