import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();


    const cardStyle = {
        height: '100%'
    };

    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className='mb-3'>
                    {items.map((item) => (
                        <MDBCol key={item.id} size="md">
                            <MDBCard style={cardStyle}>
                                <MDBCardImage src={item.img} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>${item.price}</MDBCardText>
                                    <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
