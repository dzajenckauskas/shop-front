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
    shopify: ProductShopifyType;
}

export type ProductShopifyType = {
    image: { src: string; }
}

