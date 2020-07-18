import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import React, { useMemo } from "react";
import { Provider } from "react-redux";

import { configureApp } from "@config/configureApp";
import { configureMapper, WorkspaceReducerConfig, RootSaga } from "@ws/config";
import { AppProviderContainer } from "./AppProvider.container";
import { PageComponentRouterContainer } from "./routing";

configureMapper();

interface IAppProps {
    history: History;
}

type Props = IAppProps;

const App = (props: Props) => {
    const { history } = props;

    const store = useMemo(() => configureApp(
        history,
        new WorkspaceReducerConfig(),
        new RootSaga()
    ), []);

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppProviderContainer>
                    <PageComponentRouterContainer/>
                </AppProviderContainer>
            </ConnectedRouter>
        </Provider>
    );
};

export { App };
export default App;
