import { Typography } from "@material-ui/core";
import { Image } from "@shared/molecules";
import { Translate } from "@utils";
import React, { useEffect } from "react";

import { FiltersContainer } from "./Filters";
import { FoodContainer } from "./Food";
import { useStyles } from "./MenuPage.styles";

interface IMenuPageProps {
    firstPhotoUrl: string;
    firstText: string;
    phone: string;
    address: string;
    deliveryTime: string;
    deliveryMapUrl: string;
}

interface IMenuPageCallProps {
    loadData: () => void;
}

type Props = IMenuPageProps & IMenuPageCallProps;

const MenuPage = (props: Props) => {
    const {
        firstPhotoUrl,
        firstText,
        phone,
        address,
        deliveryTime,
        deliveryMapUrl,
        loadData,
    } = props;

    useEffect(() => {
        loadData();
    }, []);

    const classes = useStyles({ firstPhotoUrl });

    return (
        <div className={classes.root}>
            <Image
                src={firstPhotoUrl}
                animation={false}
                classes={{
                    root: classes.image,
                    skeleton: classes.imageSkeleton,
                }}
            >
                <Typography className={classes.firstText} noWrap>
                    {firstText}
                </Typography>

                <Typography className={classes.address} noWrap>
                    {Translate.getString(`${address}, доставка ${deliveryTime}`)}
                </Typography>
            </Image>

            <FiltersContainer classes={{ root: classes.filters }}/>

            <FoodContainer classes={{ root: classes.menu }}/>
        </div>
    );
};

export { MenuPage, IMenuPageProps, IMenuPageCallProps };
