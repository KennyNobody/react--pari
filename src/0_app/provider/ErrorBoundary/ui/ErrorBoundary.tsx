import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { Error } from '2_widgets/Error';
import { classNames } from '5_shared/libs/classNames/classNames';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <div className={classNames('app', {}, ['normal'])}>
                    <Suspense fallback="">
                        <Error />
                    </Suspense>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
