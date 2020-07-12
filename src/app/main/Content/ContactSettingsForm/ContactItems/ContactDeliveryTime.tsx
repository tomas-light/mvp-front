import React from "react";

import { StyledComponentProps, withStyles } from "@material-ui/core";

import { IContactSettingsFormValues } from "@main/Content/models";
import { DefaultFieldSubscription } from "@shared/organisms";
import { TextFormField } from "@shared/templates";
import { Translate } from "@utils";

type ClassKey = "field";

interface IContactDeliveryTimeCallProps {
    onChange: (time: string) => void;
}

type Props = IContactDeliveryTimeCallProps & StyledComponentProps<ClassKey>;

const ContactDeliveryTime = (props: Props) => {
    const { classes, onChange } = props;

    return (
        <TextFormField
            name={nameof<IContactSettingsFormValues>(o => o.deliveryTime)}
            label={Translate.getString("время доставки")}
            InputProps={{
                placeholder: Translate.getString("15 минут"),
            }}

            subscription={DefaultFieldSubscription}
            required
            classes={{
                root: {
                    root: classes.field,
                },
            }}
            sideOnChange={onChange}
        />
    );
};

const componentWithStyles = withStyles<ClassKey>({
    field: {},
}, { name: "ContactDeliveryTime" })(ContactDeliveryTime);
export { componentWithStyles as ContactDeliveryTime };
