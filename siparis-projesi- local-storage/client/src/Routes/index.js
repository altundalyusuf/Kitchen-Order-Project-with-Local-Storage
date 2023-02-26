import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Components/HomePage/HomePage';
import KitchenList from '../Components/Kitchen/KitchenList';
import GiveOrder from '../Components/Meeting-Rooms/GiveOrder';
import MeetingRooms from '../Components/Meeting-Rooms/MeetingRooms';


function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='kitchen-list' element={<KitchenList />} />
                <Route path='meeting-rooms' element={<MeetingRooms />} />
                <Route path='meeting-rooms/:id' element={
                    // <RoomContextProvider>
                    <GiveOrder />} />
                {/* </RoomContextProvider> */}
                {/* } /> */}
                {/* Context Provider için bunu dene  */}
                {/* **Güncelleme** Bu şekilde yapınca component düzgün render edilmiyo güncellenmiyo diye uyarı fırlatıyo */}
                {/* <Route path='meeting-rooms' element={<RoomContextProvider><MeetingRooms /></RoomContextProvider>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter