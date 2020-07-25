import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import loadable from "@loadable/component";

import { NotFound } from "@app/404";
import { LayoutContainer } from "@ws/Layout";
import { NotifierContainer } from "@app/Notifier";
const MenuPageContainer = loadable(() => import(/* webpackChunkName: "MenuPage" */ "@ws/Menu/MenuPage.container"));
import { workspaceUrls } from "./workspaceUrls";

const PageComponentRouter = () => {
    return (
        <LayoutContainer>
            <Switch>
                <Route
                    exact
                    path={[
                        workspaceUrls.root,
                        workspaceUrls.menu,
                    ]}
                    component={MenuPageContainer}
                />

                <Route path="*">
                    <DefaultRouteResolver/>
                </Route>
            </Switch>

            <NotifierContainer/>
        </LayoutContainer>
    );
};

const DefaultRouteResolver = withRouter(({ location }) => {
    // if (location.pathname === workspaceUrls.root) {
    //     return <Redirect push to={workspaceUrls.menu}/>;
    // }

    return (
        <NotFound/>
    );
});

export { PageComponentRouter };
