import React, {useState} from 'react';
import styled from "styled-components";

const OrdersTable = ({orders}) => {
 const [viewOrders, setViewOrder] = useState([])
 const [show, setShow] = useState(false)
 const [model, setmodel] = useState(false)

 const action = (id) => {
     const order = orders.filter((item) => {
       return item._id.toString() === id.toString();
     })
     setViewOrder(order[0].items)
     setShow(true)
     setmodel(true)
  }
  const closeModel = () => {
   setShow(false)
   setmodel(false)
  }
 return (
  <OrdersWrapper>
          {
           model && (
            <div className="model" onClick={closeModel}>

            </div>
           )
          }
          {
           show && viewOrders.length > 0 && (
              <div className="view-info">
              <table>
               <thead>
               <tr>
                 <th>Order Id</th>
                 <th>image</th>
                 <th>name</th>
                 <th>price</th>
                 <th>quantity</th>
               </tr>
               </thead>
               <tbody>
               {viewOrders.map(order => { 
                return (
                 <tr key={order._id}>
                  <td>{order._id}</td>
                  <td><img src={order.imageSrc} alt={order.name} /></td>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>{order.quantity}</td>
                 </tr>
                )
               })
              }
              </tbody>
              </table>
              </div>
           )
          }
          <div className="table-info">
              <h3>Your Client's Orders</h3>
              <table>
               <thead>
               <tr>
                 <th>Order Id</th>
                 <th>email</th>
                 <th>phone</th>
                 <th>price</th>
                 <th>View</th>
               </tr>
               </thead>
               <tbody>
               { orders.map(order => { 
                return (
                 <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>${order.TotalPrice}</td>
                  <td>
                   <a href onClick={() => action(order._id)} className="btn-card">
                    View Orders
                    </a>
                  </td>
                 </tr>
                )
               })
              }
              </tbody>
              </table>
              </div>
  </OrdersWrapper>
 );
};

const OrdersWrapper = styled.div`
 td, th {
    text-align: left;
    padding: 6px 5px;
}
th {
    background: #45a29e;
    text-transform: capitalize;
    text-decoration: underline;
}
a.btn-card {
    text-decoration: underline;
    color: #45a29e;
    &:hover {
     cursor:pointer;
     color: black;
    }
}

tr:nth-child(even) {
  background-color: #cdcdcd;
}
.view-info img {
    width: 45px;
}

.view-info td {
    word-wrap: break-word;
    max-width: 260px;
}.model {
    background: #000000c7;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
}

.view-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:white;
}


.table-info h3 {
    margin: 10px 0px;
    padding-bottom: 10px;
    font-family: var(--font-body);
    color: #aa001e;
}
`
export default OrdersTable;