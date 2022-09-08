import React from 'react'
import styles from './ItemCard.module.scss'
import images from '../../../images/kitchen.jpg'

const ItemCardModal = ({ setModalActive, itemCardModalActive, setItemCardModalActive, showItemState }) => {
    return (
        <div onClick={() => setItemCardModalActive(false)} className={itemCardModalActive ? styles.itemCardModal + ' ' + styles.active : styles.itemCardModal}>
            <div className={itemCardModalActive ? styles.itemCardModalWrapp + ' ' + styles.active : styles.itemCardModalWrapp} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalImgWrapp}>
                    <img src={images} alt="picture" />
                </div>
                <div className={styles.modalContentWrap}>
                    <h3 className={styles.title}>{showItemState?.name}</h3>
                    <p className={styles.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>Цена: <span className={styles.price}>{showItemState?.price}</span></p>
                    <div className={styles.toggleWrap}>
                        <button className={styles.toggleBuy} onClick={() => setModalActive(true)}>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCardModal