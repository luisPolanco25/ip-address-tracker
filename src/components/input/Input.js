import React, { useContext, useState } from 'react'
import { locationApi } from '../../helpers/location-api'
import { IpAddressContext } from '../context/IpAddressContext';
import arrow from '../../assets/icon-arrow.svg';

export const Input = () => {

    const { setGeoLocation } = useContext( IpAddressContext );
    
    const [ipAddress, setIpAddress] = useState( '' );

    const handleInputChange = ({target}) => {
        setIpAddress(target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        return locationApi(ipAddress).then(data => {
            setGeoLocation(data);
        });

    }

    return (
        <div id="background">
            <h1 id="title">IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    autoComplete="off"
                    placeholder="Search for any IP address or domain"
                    name="ipAddress"
                    value={ipAddress}
                    onChange={handleInputChange}
                />

                <button type="submit" aria-labelledby="title">
                    <img src={arrow} alt="" />
                </button>

            </form>
        </div>
    )
}
