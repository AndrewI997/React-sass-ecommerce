import React from 'react';
import Wrapper from '../components/shared/Wrapper/Wrapper';
import ItemModifyModal from '../components/shared/AdminModals/ItemModifyModal';

const AdminPage = () => {

  const [modalActive, setModalActive] = React.useState(false)


  return (
    <Wrapper>
      <div>
        <button>Типы</button>
        <button>Под типы</button>
        <button>Стили</button>
        <button>Виды</button>
        <button onClick={() => setModalActive(true)} >Товары</button>
      </div>
      <ItemModifyModal
      active={modalActive} 
      setActive={setModalActive}
       />
    </Wrapper>

  )
}

export default AdminPage