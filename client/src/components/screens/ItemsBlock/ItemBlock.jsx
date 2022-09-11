import React from 'react'
import ItemCard from '../../shared/ItemCard/ItemCard';
import Wrapper from '../../shared/Wrapper/Wrapper';
import styles from './ItemBlock.module.scss'
import ItemCardModal from '../../shared/ItemCard/ItemCardModal';
import ItemsFilterBar from '../../shared/ItemsFilterBar/ItemsFilterBar';

// const ModalContext = React.createContext()

const ItemBlock = ({ setModalActive, itemCardModalActive, setItemCardModalActive }) => {

    const [showItemState, setShowItemState] = React.useState();
    const [itemsState, setItemsState] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:1111/items')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setItemsState(items)
            })
    }, [])

    return (

        <Wrapper>
            <ItemsFilterBar />
            <div className={styles.itemsBlockWrapp}>
                {
                    itemsState.map((obj) => (
                        <ItemCard key={obj.id} setShowItemState={setShowItemState} setItemCardModalActive={setItemCardModalActive} setModalActive={setModalActive} obj={obj} name={obj.name} price={'От' + ' ' + obj.price + 'p'} img={obj.imageUrl} />
                    ))
                }
                <ItemCardModal setModalActive={setModalActive} showItemState={showItemState} itemCardModalActive={itemCardModalActive} setItemCardModalActive={setItemCardModalActive} />
            </div>
        </Wrapper>
    )
}

export default ItemBlock