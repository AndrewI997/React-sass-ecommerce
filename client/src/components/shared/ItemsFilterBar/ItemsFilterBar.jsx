import React from 'react'
import styles from './ItemsFilterBar.module.scss'

const ItemsFilterBar = () => {

    const [items, setItems] = React.useState([]);
    const [items2, setItems2] = React.useState([]);
    const [items3, setItems3] = React.useState([]);
    const [items4, setItems4] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:1111/item-types')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setItems(items)
            })

        fetch('http://localhost:1111/item-sub-types')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setItems2(items)
            })

        fetch('http://localhost:1111/item-styles')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setItems3(items)
            })
        fetch('http://localhost:1111/item-kinds')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setItems4(items)
            })
    }, [])
    
    return (
        <div className={styles.filterBarWrapp} >
            <div className={styles.filterBarWrapp} >
                <ul>
                    {
                        items.map((obj) => (
                            <li key={obj.id} >{obj.name}</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        items2.map((obj) => (
                            <li key={obj.id} >{obj.name}</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        items3.map((obj) => (
                            <li key={obj.id} >{obj.name}</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        items4.map((obj) => (
                            <li key={obj.id} >{obj.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ItemsFilterBar