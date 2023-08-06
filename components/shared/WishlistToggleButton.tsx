import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToWishlist, removeFromWishlist, selectWishlist } from "../../app/wishlistSlice";
import { getTheme } from "../layout/Theme";
import { ProductType } from "./ProductTypes";

type Props = {
    product: ProductType;
}

export const WishlistToggleButton = ({ product }: Props) => {
    const dispatch = useAppDispatch();
    const theme = getTheme()
    const wishlist = useAppSelector(selectWishlist);
    const likedItem = wishlist.products.find((o) => o.id === product.id) !== undefined;

    const handleLike = () => {
        likedItem ? dispatch(removeFromWishlist(product)) : dispatch(addToWishlist(product));
    }
    return (
        <IconButton
            size="small"
            onClick={handleLike}
        >
            {likedItem && <BookmarkAdd sx={{ color: theme.palette.secondary.main }} />}
            {!likedItem && <BookmarkAdd sx={{ color: theme.palette.grey[500] }} />}
        </IconButton>
    )
}