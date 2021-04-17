import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: 'Freelance de website',
  //         type: 'deposit',
  //         category: 'Dev',
  //         amount: 6000,
  //         createdAt: new Date('2021-04-11 09:15:00'),
  //       },
  //       {
  //         id: 2,
  //         title: 'Aluguel',
  //         type: 'withdraw',
  //         category: 'Casa',
  //         amount: 1120,
  //         createdAt: new Date('2021-04-10 14:15:00'),
  //       }
  //     ]
  //   })
  // },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

    this.del('/transactions/:id')
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
