import React from "react";

import { SvgIconProps } from "@material-ui/core/SvgIcon";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { withStyles } from "@material-ui/core";

type Props = SvgIconProps;

const HotDog = (props: Props) => (
    <SvgIcon {...props} width="20px" height="20px" fill="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0)">
            <path
                d="M19.0847 0.91554C18.4987 0.329693 17.704 0.000582388 16.8753 0.000582388C16.0467 0.000582388 15.252 0.329693 14.6659 0.91554L0.91594 14.6655C0.61747 14.9538 0.379401 15.2986 0.215623 15.6799C0.0518447 16.0612 -0.0343623 16.4712 -0.0379679 16.8862C-0.0415736 17.3011 0.0374942 17.7126 0.194622 18.0966C0.35175 18.4807 0.583791 18.8296 0.877205 19.123C1.17062 19.4164 1.51953 19.6485 1.90358 19.8056C2.28763 19.9627 2.69913 20.0418 3.11407 20.0382C3.529 20.0346 3.93907 19.9484 4.32033 19.7846C4.70159 19.6208 5.04642 19.3828 5.33469 19.0843L19.0847 5.33429C19.6705 4.74827 19.9996 3.95355 19.9996 3.12492C19.9996 2.29628 19.6705 1.50156 19.0847 0.91554ZM17.1343 4.6339C16.3687 5.39913 15.6687 5.51945 15.1058 5.61593C14.6003 5.70304 14.2347 5.76554 13.7503 6.24992C13.2659 6.73429 13.2034 7.09992 13.1163 7.60577C13.0195 8.16827 12.8995 8.86866 12.1339 9.6339C11.3683 10.3991 10.6683 10.5194 10.1058 10.6163C9.59992 10.703 9.23469 10.7655 8.75031 11.2499C8.26594 11.7343 8.20344 12.0995 8.11633 12.6054C8.01985 13.1679 7.89992 13.8683 7.1343 14.6335C6.36867 15.3987 5.66828 15.5194 5.10578 15.6159C4.60031 15.703 4.23469 15.7655 3.75031 16.2499C3.63309 16.3671 3.4741 16.433 3.30832 16.433C3.14254 16.433 2.98355 16.3671 2.86633 16.2499C2.74911 16.1327 2.68325 15.9737 2.68325 15.8079C2.68325 15.6421 2.74911 15.4832 2.86633 15.3659C3.63196 14.6007 4.33195 14.4804 4.89445 14.3839C5.40227 14.2972 5.76555 14.2347 6.25031 13.7499C6.73508 13.2652 6.79719 12.9003 6.88391 12.3944C6.98078 11.8319 7.1007 11.1316 7.86633 10.3663C8.63195 9.60109 9.33195 9.48077 9.89445 9.38429C10.4023 9.29757 10.7655 9.23468 11.2499 8.75031C11.7343 8.26593 11.7968 7.90031 11.8843 7.39445C11.9808 6.83195 12.1007 6.13156 12.8663 5.36632C13.632 4.60109 14.332 4.48038 14.8945 4.3839C15.4003 4.29679 15.7655 4.23468 16.2503 3.74992C16.3675 3.63269 16.5265 3.56684 16.6923 3.56684C16.8581 3.56684 17.0171 3.63269 17.1343 3.74992C17.2515 3.86714 17.3174 4.02613 17.3174 4.19191C17.3174 4.35769 17.2515 4.51668 17.1343 4.6339ZM1.22844 12.5851L12.5855 1.22804L12.1347 0.776868C11.1581 -0.199694 9.64055 -0.264538 8.74446 0.631556L0.631955 8.74406C-0.264138 9.64015 -0.198904 11.1577 0.777268 12.1339L1.22844 12.5851ZM18.7722 7.41476L7.41516 18.7718L7.86594 19.223C8.8425 20.1995 10.3601 20.2644 11.2562 19.3683L19.3687 11.2558C20.2648 10.3597 20.1995 8.8421 19.2234 7.86554L18.7722 7.41476Z"
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
    </SvgIcon>
);

const componentWithStyles = withStyles({
    root: {
        width: "auto",
    },
})(HotDog);
export { componentWithStyles as HotDog };