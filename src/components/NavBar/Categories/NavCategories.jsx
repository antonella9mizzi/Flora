import React, {useState, useEffect} from 'react';
import categories from "../../../categories"
import {Link} from 'react-router-dom';
import NavBarCSS from "../NavBar.module.css"

function NavCategories(){
    const [catList, setCatList] = useState([]);
    useEffect(()=>{
        setCatList(categories)
    },[])


    return (
        <div>
            <ul className={NavBarCSS.navFlex}>
               {catList.map(cat => <Link to={`/categoria/${cat.id}`} key={cat.id} style={{ textDecoration: 'none' }}><li>{cat.name}</li></Link>)}
            </ul>
        </div>
    )
}

export default NavCategories;