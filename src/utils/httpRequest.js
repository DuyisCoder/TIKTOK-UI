import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/', // api nào cũng bắt đầu từ /api/ -> chỉ khác path đằng sau nên lấy như này
});

export const get = async (path, options = {}) => {
    // đặt options là object rỗng vì ko bắt buộc
    const response = await httpRequest.get(path, options); // await là chờ
    return response.data;
};

export default httpRequest;
