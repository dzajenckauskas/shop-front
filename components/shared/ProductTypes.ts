import { PaginationType } from "./PagginationType";

export type ProductsResponseType = {
    data: ProductType[];
    pagination: PaginationType;
}

export type ProductType = {
    id: number,
    attributes: ProductAttributesType;
};

export type ProductAttributesType = {
    title: string;
    slug: string;
    isNew: boolean;
    isPopular: boolean;
    locale: string;
    price: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    images: ProductImagesType;
    shopify: ProductShopifyType;
}

export type ProductImagesType = {
    data: ImageType[];
}

export type ImageType = {
    id: number;
    attributes: ImageAttributesType;
}

export type ImageAttributesType = {
    alternativeText: string | null;
    caption: string | null;
    createdAt: string;
    ext: string;
    formats: null;
    hash: string;
    height: null;
    mime: string;
    name: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    size: number;
    updatedAt: string;
    url: string;
    width: null;
}

export type ProductShopifyType = {
    image: { src: string; }
}

