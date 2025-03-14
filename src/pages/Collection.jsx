import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; 
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        applyFilter();  
    }, [category, subCategory]);

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const applyFilter = () => {
        let productsCopy = [...products];
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }
        if (subCategory.length > 0) {
          productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
      }
        setFilterProducts(productsCopy);
    };

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='mu-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>  

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Men', 'Women', 'Kids'].map((cat) => (
                            <label key={cat} className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={cat} onChange={toggleCategory} />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Subcategory Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
                            <label key={sub} className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={sub} onChange={toggleSubCategory} />
                                {sub}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Product List */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Product Sort */}
                    <select className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Displaying Products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
