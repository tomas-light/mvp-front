import React from "react";

import { SvgIconProps } from "@material-ui/core/SvgIcon";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { withStyles } from "@material-ui/core";

type Props = SvgIconProps;

const Globe = (props: Props) => (
    <SvgIcon {...props} width="20px" height="22px" viewBox="0 0 20 22">
        <g clip-path="url(#clip0)">
            <path d="M13.5685 6.81809C12.9839 3.0127 11.6048 0.34082 10 0.34082C8.39516 0.34082 7.01613 3.0127 6.43145 6.81809H13.5685ZM6.12903 10.909C6.12903 11.855 6.17742 12.7627 6.2621 13.6363H13.7339C13.8185 12.7627 13.8669 11.855 13.8669 10.909C13.8669 9.96298 13.8185 9.05531 13.7339 8.18173H6.2621C6.17742 9.05531 6.12903 9.96298 6.12903 10.909ZM19.2218 6.81809C18.0686 3.92463 15.7339 1.68741 12.8508 0.784002C13.8347 2.22434 14.5121 4.39338 14.8669 6.81809H19.2218ZM7.14516 0.784002C4.26613 1.68741 1.92742 3.92463 0.778226 6.81809H5.13306C5.48387 4.39338 6.16129 2.22434 7.14516 0.784002ZM19.6532 8.18173H15.0282C15.1129 9.07662 15.1613 9.99281 15.1613 10.909C15.1613 11.8252 15.1129 12.7414 15.0282 13.6363H19.6492C19.871 12.7627 19.996 11.855 19.996 10.909C19.996 9.96298 19.871 9.05531 19.6532 8.18173ZM4.83871 10.909C4.83871 9.99281 4.8871 9.07662 4.97177 8.18173H0.346774C0.129032 9.05531 0 9.96298 0 10.909C0 11.855 0.129032 12.7627 0.346774 13.6363H4.96774C4.8871 12.7414 4.83871 11.8252 4.83871 10.909ZM6.43145 14.9999C7.01613 18.8053 8.39516 21.4772 10 21.4772C11.6048 21.4772 12.9839 18.8053 13.5685 14.9999H6.43145ZM12.8548 21.034C15.7339 20.1306 18.0726 17.8934 19.2258 14.9999H14.871C14.5161 17.4246 13.8387 19.5937 12.8548 21.034ZM0.778226 14.9999C1.93145 17.8934 4.26613 20.1306 7.14919 21.034C6.16532 19.5937 5.4879 17.4246 5.13306 14.9999H0.778226Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="20" height="21.8182" fill="white"/>
            </clipPath>
        </defs>
    </SvgIcon>
);

const componentWIthStyles = withStyles({
    root: {
        width: "auto",
    },
})(Globe);
export { componentWIthStyles as Globe };
