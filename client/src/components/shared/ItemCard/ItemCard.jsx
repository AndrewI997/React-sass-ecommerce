import React from 'react'
import styles from './ItemCard.module.scss'
import images from '../../../images/kitchen.jpg'

const ItemCard = ({ obj, name, price, setModalActive, setItemCardModalActive, setShowItemState }) => {


    return (
        <>
            <div className={styles.card}>
                <div className={styles.imgWrap}>
                    <img src={images} alt="picture" />
                </div>
                <div className={styles.contentWrap}>
                    <h3 className={styles.title}>{name}</h3>
                    <p className={styles.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>Цена: <span className={styles.price}>{price}</span></p>
                    <div className={styles.toggleWrap}>
                        <button className={styles.toggleBuy} onClick={() => setModalActive(true)}>Заказать</button>
                        <p className={styles.toggleInfo} onClick={() => {
                            setItemCardModalActive(true)
                            setShowItemState(obj)
                        }} href="#">Подробнее..</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard