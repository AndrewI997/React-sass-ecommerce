import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss'


const Layout = ({ children }) => {

    const [modalActive, setModalActive] = React.useState(false)


    return (
        <div className={styles.layoutWrapp}>
            <Header />
            <mine className={styles.contentWrapp}>
                {children}
            </mine>
            <Footer />
        </div>

    )
}

export default Layout