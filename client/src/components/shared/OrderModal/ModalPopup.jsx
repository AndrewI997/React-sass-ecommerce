import React from 'react'
import styles from './ModalPopup.module.scss'

const ModalPopup = ({ active, setActive }) => {
  return (
    <div className={active ? styles.modal + ' ' + styles.active : styles.modal} onClick={() => setActive(false)}>
      <form  className={active ? styles.modalContent + ' ' + styles.active : styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.formLeftDecoration}></div>
            <div className={styles.formRightDecoration}></div>
            <div className={styles.circle}></div>
            <div className={styles.formInner}>
                <h3>Обратный звонок</h3>
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="Телефон" />
                <textarea placeholder="Сообщение..." rows="3"></textarea>
                <input type="submit" value="Отправить" />
            </div>
        </form>
    </div>
  )
}

export default ModalPopup