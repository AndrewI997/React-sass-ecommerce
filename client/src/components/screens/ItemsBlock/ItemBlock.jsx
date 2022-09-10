import React from 'react'
import ItemCard from '../../shared/ItemCard/ItemCard';
import Wrapper from '../../shared/Wrapper/Wrapper';
import styles from './ItemBlock.module.scss'
import ItemCardModal from '../../shared/ItemCard/ItemCardModal';
import ItemsFilterBar from '../../shared/ItemsFilterBar/ItemsFilterBar';

// const ModalContext = React.createContext()

const ItemBlock = ({ setModalActive, itemCardModalActive, setItemCardModalActive }) => {

    const [showItemState, setShowItemState] = React.useState();

    const [itemsState, setItemsState] = React.useState({
        items: [{
            id: 1,
            name: 'Kitchen',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '120 000',
            imageUrl: '///'
        },
        {
            id: 2,
            name: 'Shkaf',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '40 000',
            imageUrl: '///'
        },
        {
            id: 3,
            name: 'Kitchen',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '150 000',
            imageUrl: '///'
        },
        {
            id: 4,
            name: 'Gorka',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '370 000',
            imageUrl: '///'
        },
        {
            id: 5,
            name: 'Shkaf',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '80 000',
            imageUrl: '///'
        },
        {
            id: 6,
            name: 'Kitchen',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '197 000',
            imageUrl: '///'
        },
        {
            id: 7,
            name: 'Gorka',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '60 000',
            imageUrl: '///'
        },
        {
            id: 8,
            name: 'Kitchen',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '120 000',
            imageUrl: '///'
        },
        {
            id: 9,
            name: 'Shkaf',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '40 000',
            imageUrl: '///'
        },
        {
            id: 10,
            name: 'Kitchen',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '150 000',
            imageUrl: '///'
        },
        {
            id: 11,
            name: 'Gorka',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '370 000',
            imageUrl: '///'
        },
        {
            id: 12,
            name: 'Shkaf',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '80 000',
            imageUrl: '///'
        },
        {
            id: 13,
            name: 'Kitchen',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '197 000',
            imageUrl: '///'
        },
        {
            id: 14,
            name: 'Gorka',
            typeId: '1',
            subTypeId: '1',
            variationId: '1',
            price: '60 000',
            imageUrl: '///'
        }]
    })

    // console.log(itemsState)

    return (

        <Wrapper>
            <ItemsFilterBar />
            <div className={styles.itemsBlockWrapp}>
                {
                    itemsState.items.map((obj) => (
                        <ItemCard key={obj.id} setShowItemState={setShowItemState} setItemCardModalActive={setItemCardModalActive} setModalActive={setModalActive} obj={obj} name={obj.name} price={'От' + ' ' + obj.price + 'p'} img={obj.imageUrl} />
                    ))
                }
                <ItemCardModal setModalActive={setModalActive} showItemState={showItemState} itemCardModalActive={itemCardModalActive} setItemCardModalActive={setItemCardModalActive} />
            </div>
        </Wrapper>
    )
}

export default ItemBlock