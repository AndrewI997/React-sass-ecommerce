import React from 'react'
import ItemCard from '../../shared/ItemCard/ItemCard';
import Wrapper from '../../shared/Wrapper/Wrapper';
import styles from './ItemBlock.module.scss'
import ItemCardModal from '../../shared/ItemCard/ItemCardModal';
import ItemsFilterBar from '../../shared/ItemsFilterBar/ItemsFilterBar';

// const ModalContext = React.createContext()

const ItemBlock = ({ setModalActive, itemCardModalActive, setItemCardModalActive }) => {

    const [clickedType, setClickedType] = React.useState(0)
    const [clickedSubType, setClickedSubType] = React.useState(0)
    const [clickedStyle, setClickedStyle] = React.useState(0)
    const [clickedKind, setClickedKind] = React.useState(0)

    const [showItemModal, setShowItemModal] = React.useState();
    const [itemsState, setItemsState] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:1111/item')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setItemsState(items)
            })
    }, [])

    return (

        <Wrapper>
            <ItemsFilterBar
                clickedType={clickedType}
                setClickedType={(id) => setClickedType(id)}
                clickedSubType={clickedSubType}
                setClickedSubType={(id) => setClickedSubType(id)}
                clickedStyle={clickedStyle}
                setClickedStyle={(id) => setClickedStyle(id)}
                clickedKind={clickedKind}
                setClickedKind={(id) => setClickedKind(id)} />

            <div className={styles.itemsBlockWrapp}>
                {
                    itemsState.map((obj) => (
                        <ItemCard
                            key={obj.id}
                            setShowItemModal={setShowItemModal}
                            setItemCardModalActive={setItemCardModalActive}
                            setModalActive={setModalActive}
                            obj={obj}
                            name={obj.name}
                            price={'От' + ' ' + obj.price + 'p'}
                            img={obj.imageUrl} />
                    ))
                }
                <ItemCardModal
                    setModalActive={setModalActive}
                    showItemModal={showItemModal}
                    itemCardModalActive={itemCardModalActive}
                    setItemCardModalActive={setItemCardModalActive} />
            </div>
        </Wrapper>
    )
}

export default ItemBlock