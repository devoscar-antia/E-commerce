import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //Shopping Card . Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);


    //Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


    //Product Detail . Show product

    const [productToShow, setProductToShow] = useState({});


    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping Cart . Order
    const [order, setOrder] = useState([]);

    // Get products
    const [items, setItems] = useState(null)


    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products by Title
    const [SearchByTitle, setSearchByTitle] = useState(null)

    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    const filteredItemsByTitle = (items, SearchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(SearchByTitle.toLowerCase()))
    }


    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, SearchByTitle) => {
        if (searchType === 'BY_TITLE') {
            return (
                filteredItemsByTitle(items, SearchByTitle)
            )
        }

        if (searchType === 'BY_CATEGORY') {
            return (
                filteredItemsByCategory(items, searchByCategory)
            )
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return (
                filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(SearchByTitle.toLowerCase()))
            )
        }

        if (!searchType) {
            return items
        }

    }
    useEffect(() => {

        if (SearchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, SearchByTitle, searchByCategory))
        if (SearchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, SearchByTitle, searchByCategory))
        if (!SearchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, SearchByTitle, searchByCategory))
        if (!SearchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, SearchByTitle, searchByCategory))

    }, [items, SearchByTitle, searchByCategory])



    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                SearchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory


            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
