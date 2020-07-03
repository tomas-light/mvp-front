import React, { FunctionComponent, useEffect, useState } from "react";

import {
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    IconButton,
    Typography,
    makeStyles
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { Translate } from "@utils/translates";

import { Cart as CartIcon } from "@shared/atoms/icons";
import { Dish } from "@app/Menu/models";

const useStyles = makeStyles((theme) => ({
    actions: {
        display: "grid",
        gridTemplateAreas: "'sizes sizes sizes' '. . .' 'title . add'",
        gridTemplateColumns: "auto 1fr auto",
        gridTemplateRows: "auto 32px 48px",
        padding: "20px",
    },
    sizes: {
        gridArea: "sizes",
    },
    title: {
        gridArea: "title",
        fontSize: 16,
        lineHeight: "19px",
        fontWeight: 500,
    },
    add: {
        gridArea: "add",
        display: "grid",
        gridTemplateAreas: "'cost cart'",
        gridColumnGap: 10,
        alignItems: "center",
    },
    cost: {
        gridArea: "cost",
        fontSize: 24,
        lineHeight: "28px",
        fontWeight: "bold",
    },
    cartButton: {
        gridArea: "cart",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
        },
    },
}), { name: "FoodItem" });

interface IFoodItemProps {
    dish: Dish;
    amounts: Map<number, number>;
}

interface IFoodItemCallProps {
    openDish: (dishId: number) => void;
    addToCart: (dishId: number, size: number) => void;
    increaseAmount: (dishId: number, size: number) => void;
    decreaseAmount: (dishId: number, size: number) => void;
}

type Props = IFoodItemProps & IFoodItemCallProps;

const FoodItem: FunctionComponent<Props> = (props) => {
    const {
        dish,
        amounts,
        openDish,
        addToCart,
        increaseAmount,
        decreaseAmount,
    } = props;

    const classes = useStyles();
    const [ selectedSize, setSelectedSize ] = useState<number>(null);

    useEffect(() => {
        if (!dish || dish.sizes.length === 0) {
            return;
        }
        setSelectedSize(dish.sizes[0]);
    }, [ dish ]);

    const handleOpen = () => {
        openDish(dish.id);
    };

    const handleAddToCart = () => {
        addToCart(dish.id, selectedSize);
    };
    const handleIncrease = () => {
        increaseAmount(dish.id, selectedSize);
    };
    const handleDecrease = () => {
        decreaseAmount(dish.id, selectedSize);
    };

    return (
        <Card elevation={0}>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    component="img"
                    alt={dish.title}
                    height="210"
                    image={dish.image}
                    title={dish.title}
                />
            </CardActionArea>

            <CardActions className={classes.actions} disableSpacing>
                <div className={classes.sizes}>
                    sizes
                </div>

                <Typography variant="body1" className={classes.title}>
                    {dish.title}
                </Typography>

                <div className={classes.add}>
                    <Typography variant="h5" component="h2" className={classes.cost}>
                        {Translate.getString(`${dish.cost} ₽`)}
                    </Typography>

                    {amounts.has(selectedSize)
                        ? (
                            <ButtonGroup variant="contained" color="primary" aria-label="split button">
                                <Button
                                    color="primary"
                                    size="small"
                                    aria-controls={open ? "split-button-menu" : undefined}
                                    aria-expanded={open ? "true" : undefined}
                                    aria-label="decrease dish amount"
                                    onClick={handleDecrease}
                                >
                                    <Remove/>
                                </Button>
                                <Button>{amounts.get(selectedSize)}</Button>
                                <Button
                                    color="primary"
                                    size="small"
                                    aria-controls={open ? "split-button-menu" : undefined}
                                    aria-expanded={open ? "true" : undefined}
                                    aria-label="increase dish amount"
                                    onClick={handleIncrease}
                                >
                                    <Add/>
                                </Button>
                            </ButtonGroup>
                        )
                        : (
                            <IconButton
                                className={classes.cartButton}
                                color="primary"
                                onClick={handleAddToCart}
                            >
                                <CartIcon/>
                            </IconButton>
                        )
                    }
                </div>
            </CardActions>
        </Card>
    );
};

export { FoodItem, IFoodItemProps, IFoodItemCallProps };