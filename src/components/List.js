import React, { useState, useEffect } from 'react';
import Thumbnail from "./Thumbnail";
import { apiFetch } from '../Service/Service';
var count = 0;
const List = ({value}) => {
    const PAGE_SIZE = 10;
    const [listItems, setListItems] = useState(value.slice(0, PAGE_SIZE));
    const [isFetching, setIsFetching] = useState(false);
    
    console.log("Listitems======>", listItems)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    function handleScroll() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight || isFetching)
            setIsFetching(true);
    }
    
    function fetchMoreListItems() {
        setTimeout(() => {
            count += 1;
            console.log(count, value.slice(count * PAGE_SIZE, (count + 1) * PAGE_SIZE))

            setListItems(prevState => ([...prevState, ...value.slice(count * PAGE_SIZE, (count + 1) * PAGE_SIZE)]));
            setIsFetching(false);
        }, 500);
    }

    return (
        <>
            {listItems.map(a =>
                <div className="containers" key={a.id}>
                    <div className="cards">
                        <Thumbnail
                            item={a}/>
                    </div>
                </div>
            )
            }
            {isFetching && 'Fetching more list items...'}
        </>
    );
};

export default List;