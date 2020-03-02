import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer naIFExOFXeBhBiRHTThFsR-Jx67z4-nSZFC2Jqm2ob514yj6_hIa-r5A9OF3DxBu2PuyVJRNGqo6VyyYPvZQcBv6aI4T_FTOhVBYtEjaZiFoM6NJwqxkgH-NYYw2XnYx'
    }
});