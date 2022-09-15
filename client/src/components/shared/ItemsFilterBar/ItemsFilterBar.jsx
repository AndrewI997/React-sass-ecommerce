import React from 'react'
import styles from './ItemsFilterBar.module.scss'

const ItemsFilterBar = ({ clickedType, setClickedType, clickedSubType, setClickedSubType, clickedStyle, setClickedStyle, clickedKind, setClickedKind }) => {

    const [types, setTypes] = React.useState([]);
    const [subTypes, setSubTypes] = React.useState([]);
    const [stylesheets, setStylesheets] = React.useState([]);
    const [kinds, setKinds] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:1111/item-type')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setTypes(items)
            })

        fetch('http://localhost:1111/item-sub-type')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setSubTypes(items)
            })

        fetch('http://localhost:1111/item-style')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setStylesheets(items)
            })
        fetch('http://localhost:1111/item-kind')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setKinds(items)
            })
    }, [])

    return (
        <div className={styles.filterBarWrapp} >
            <div className={styles.filterBarWrapp} >
                <h2>Тип:</h2>
                <ul>
                    {
                        types.map((obj, i) => (
                            <li key={obj.name}
                                onClick={() => setClickedType(i)}
                                className={clickedType === i ? styles.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={styles.filterBarWrapp} >
                <h2>Вид:</h2>
                <ul>
                    {
                        subTypes.map((obj, i) => (
                            <li key={obj.name}
                                onClick={() => setClickedSubType(i)}
                                className={clickedSubType === i ? styles.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={styles.filterBarWrapp} >
                <h2>Стиль:</h2>
                <ul>
                    {
                        stylesheets.map((obj, i) => (
                            <li key={obj.name}
                                onClick={() => setClickedStyle(i)}
                                className={clickedStyle === i ? styles.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={styles.filterBarWrapp} >
                <h2>Вариация:</h2>
                <ul>
                    {
                        kinds.map((obj, i) => (
                            <li key={obj.name}
                                onClick={() => setClickedKind(i)}
                                className={clickedKind === i ? styles.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ItemsFilterBar