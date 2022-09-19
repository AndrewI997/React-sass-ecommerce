import React from 'react'
import Wrapper from '../components/shared/Wrapper/Wrapper';
import ItemBlock from '../components/screens/ItemsBlock/ItemBlock';
import ModalPopup from '../components/shared/OrderModal/ModalPopup';

const ProductPage = () => {
  const [modalActive, setModalActive] = React.useState(false)
  const [itemCardModalActive, setItemCardModalActive] = React.useState(false)


  return (
    <>
      <ItemBlock 
      itemCardModalActive={itemCardModalActive} 
      setItemCardModalActive={setItemCardModalActive} 
      setModalActive={setModalActive} 
      />
      <ModalPopup 
      active={modalActive} 
      setActive={setModalActive} 
      />
    </>
  )
}

export default ProductPage