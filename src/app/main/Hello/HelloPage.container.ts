import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { push } from "connected-react-router";

import { mainUrls } from "@main/routing/mainUrls";
import {
    HelloPage,
    IHelloPageCallProps,
} from "./HelloPage";

const mapDispatchToProps = (dispatch: Dispatch): IHelloPageCallProps => {
    return {
        redirectToSetupPage: () => dispatch(push(mainUrls.siteSettings)),
    };
};

const HelloPageContainer: ComponentType = connect(
    null,
    mapDispatchToProps
)(HelloPage);

export { HelloPageContainer };
