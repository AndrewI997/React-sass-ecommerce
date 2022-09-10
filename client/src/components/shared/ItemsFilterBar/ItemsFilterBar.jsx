import React from 'react'
import styles from './ItemsFilterBar.module.scss'

const ItemsFilterBar = () => {


    return (
            <div className={styles.filterBarWrapp} >
                <div className={styles.filterBarWrapp} >
                    <ul>
                        <li>Корпусная</li>
                        <li>Каркасная</li>
                    </ul>
                </div>
            </div>
    )
}

export default ItemsFilterBar