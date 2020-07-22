import { SnackbarProvider, WithSnackbarProps } from "notistack";
import React, { createRef, PropsWithChildren } from "react";

import { Button } from "@material-ui/core";

import { Translate } from "@utils/translates";

type Props = PropsWithChildren<any>;

const AppSnackbarProvider = (props: Props) => {
    const { children } = props;

    const snackbarRef = createRef<WithSnackbarProps>();

    const SnackButton = (key: number) => {
        const onClickDismiss = () => {
            snackbarRef.current.closeSnackbar(key);
        };
        return (
            <Button onClick={onClickDismiss} variant={"contained"}>
                {Translate.getString("Dismiss")}
            </Button>
        );
    };

    return (
        <SnackbarProvider
            maxSnack={5}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            ref={snackbarRef}
            action={SnackButton}
        >
            {children}
        </SnackbarProvider>
    );
};

export { AppSnackbarProvider };