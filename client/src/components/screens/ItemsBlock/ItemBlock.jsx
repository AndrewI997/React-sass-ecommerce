import React from 'react'
import ItemCard from '../../shared/ItemCard/ItemCard';
import styles from './ItemBlock.module.scss'
import ItemCardModal from '../../shared/ItemCard/ItemCardModal';

const ItemBlock = ({ setModalActive, itemCardModalActive, setItemCardModalActive }) => {

    const [showItemState, setShowItemState] = React.useState();

    const [itemsState, setItemsState] = React.useState({
        items: [{
            id: 1,
            name: 'Kitchen',
            price: '120 000',
            imageUrl: '///'
        },
        {
            id: 2,
            name: 'Shkaf',
            price: '40 000',
            imageUrl: '///'
        },
        {
            id: 3,
            name: 'Kitchen',
            price: '150 000',
            imageUrl: '///'
        },
        {
            id: 4,
            name: 'Gorka',
            price: '370 000',
            imageUrl: '///'
        },
        {
            id: 5,
            name: 'Shkaf',
            price: '80 000',
            imageUrl: '///'
        },
        {
            id: 6,
            name: 'Kitchen',
            price: '197 000',
            imageUrl: '///'
        },
        {
            id: 7,
            name: 'Gorka',
            price: '60 000',
            imageUrl: '///'
        },
        {
            id: 8,
            name: 'Kitchen',
            price: '120 000',
            imageUrl: '///'
        },
        {
            id: 9,
            name: 'Shkaf',
            price: '40 000',
            imageUrl: '///'
        },
        {
            id: 10,
            name: 'Kitchen',
            price: '150 000',
            imageUrl: '///'
        },
        {
            id: 11,
            name: 'Gorka',
            price: '370 000',
            imageUrl: '///'
        },
        {
            id: 12,
            name: 'Shkaf',
            price: '80 000',
            imageUrl: '///'
        },
        {
            id: 13,
            name: 'Kitchen',
            price: '197 000',
            imageUrl: '///'
        },
        {
            id: 14,
            name: 'Gorka',
            price: '60 000',
            imageUrl: '///'
        }]
    })

    // console.log(itemsState)


    return (
        <div className={styles.itemsBlockWrapp}>
            {
                itemsState.items.map((obj) => (
                    <ItemCard key={obj.id} setShowItemState={setShowItemState} setItemCardModalActive={setItemCardModalActive} setModalActive={setModalActive} obj={obj} name={obj.name} price={'От' + ' ' + obj.price + 'p'} img={obj.imageUrl} />
                ))
            }
            <ItemCardModal setModalActive={setModalActive} showItemState={showItemState} itemCardModalActive={itemCardModalActive} setItemCardModalActive={setItemCardModalActive} />
        </div>
    )
}

export default ItemBlock