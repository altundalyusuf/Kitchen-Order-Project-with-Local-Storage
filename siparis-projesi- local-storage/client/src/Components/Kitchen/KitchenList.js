import React, { useEffect } from 'react'
import { useRoom } from '../../Contexts/RoomContext';
import OrderList from './OrderList'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


function KitchenList() {
    const { order, setOrder } = useRoom();

    // handle change ile değişiklik olduğunda sayfa yenileniyor
    const handleChange = () => {
        let data = JSON.parse(localStorage.getItem('order'));
        setOrder(JSON.parse(localStorage.getItem('order')))  //yeni ekleğğimmmmm
        window.location.reload(true)
    };

    // LocalStorage'da değişiklik olduğunda sayfayı yenile
    useEffect(() => {
        window.addEventListener(
            'storage',
            handleChange,
            false,
        );

        return () => window.removeEventListener('storage', handleChange);
    });


    return (
        <div id='home-page-container' className="border d-flex align-items-center justify-content-center kitchenList">

            <MDBContainer breakpoint="md">
                <MDBRow center>
                    <MDBCol size='5' className='me-4'>
                        {order.length > 0 ?
                            order.map((item, index) => {
                                return (
                                    <OrderList value={item} key={index} />
                                )
                            })
                            :
                            <header>
                                <div className='p-5 text-center text-light bg-dark bg-gradient square rounded-5'>
                                    <h4 className='mb-3'>Yeni sipariş yok :)</h4>
                                </div>
                            </header>

                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div >

    )


}

export default KitchenList