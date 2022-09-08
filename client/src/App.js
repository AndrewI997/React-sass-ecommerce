import React from 'react';
import Layout from './components/Layout/Layout';
import AppRouter from './routes/AppRouter';


function App() {

  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
