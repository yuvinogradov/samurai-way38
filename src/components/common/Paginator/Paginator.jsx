import React from 'react';
import styles from "./Paginator.module.css";


let Paginator = ({totalUsersCount,pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // if(pages.length === 0) pages.push(1)
    // debugger
    return <div>
        {
            pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={(e) => {  //е, в данном случае не используется
                                 onPageChanged(p)
                             }}>{p}</span>
            })
        }
    </div>
}

export default Paginator;