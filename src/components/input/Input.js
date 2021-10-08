import React, { useContext, useState } from 'react'
import { locationApi } from '../../helpers/location-api'
import { IpAddressContext } from '../context/IpAddressContext';

export const Input = () => {

    const {geoLocation, setGeoLocation} = useContext(IpAddressContext);
    const {ip} = geoLocation;
    
    const [ipAddress, setIpAddress] = useState(ip);

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
            <h1>IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    autoComplete="off"
                    placeholder="Search for any IP address or domain"
                    name="ipAddress"
                    value={ipAddress}
                    onChange={handleInputChange}
                />

            </form>
        </div>
    )
}