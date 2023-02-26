import React, { useState } from 'react'
import { MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';


function OrderList({ value }) {

    // Modal için kodlar ama eksik çalışıyo

    // const [basicModal, setBasicModal] = useState(false);

    // const toggleShow = () => setBasicModal(!basicModal);

    // const goToModal = (e) => {
    //     toggleShow();
    //     let roomNumber = e.target.previousElementSibling.firstElementChild.children[0].innerHTML
    //     let orderDetail = e.target.previousElementSibling.firstElementChild.children[1].innerHTML
    //     let modalBody = document.getElementById('kitchen-modal');
    //     modalBody.innerHTML = `
    //     <h6><strong>Toplantı Odası ${roomNumber}</strong></h6>
    //     <p>${orderDetail}</p>
    //     `
    //     console.log(roomNumber)
    //     console.log(orderDetail)
    // }

    const completeOrder = () => {

        let data = JSON.parse(localStorage.getItem('order'));
        let index = data.findIndex(x => x.roomID === value.roomID && x.order === value.order);
        data.splice(index, 1);
        localStorage.setItem('order', JSON.stringify(data));
        window.location.reload(true);
    }

    return (
        <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light >
                <MDBListGroupItem className='d-flex justify-content-between align-items-center mb-1 ' id='order-list-item'>
                    <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                            <p className='fw-bold mb-1' >Toplantı odası {value.roomID}</p>
                            <p className='mb-0'>{value.order}</p>
                        </div>
                    </div>

                    <MDBBtn size='sm' rounded color='dark' className='me-2 completeOrderButton' onClick={completeOrder}>
                        &#10004;
                    </MDBBtn>
                </MDBListGroupItem>
            </MDBListGroup>

            {/* Modal */}
            {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Siparişi silmeyi onaylıyor musunuz?</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody id='kitchen-modal' >

                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Hayır
                            </MDBBtn>
                            <MDBBtn onClick={completeOrder} >Evet</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal> */}

        </div >
    )
}

export default OrderList