import { IconVariant } from "@enums";
import { Dispatch } from "redux";

export interface IOnChangeSiteNameData {
    siteName: string;
}

export interface ISetUserNameData {
    userName: string;
}

export interface IOnChangeDomainData {
    domain: string;
}

export interface IOnChangeFaviconData {
    faviconVariant: IconVariant;
}

export interface IOnChangeOpenGraphImageData {
    imageFile: File;
    dispatch: Dispatch;
}

export interface IOnChangeOpenGraphTitleData {
    title: string;
}
