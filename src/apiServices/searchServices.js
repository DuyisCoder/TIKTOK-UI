import * as request from '~/utils/request';
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            // chờ khi resquest chạy xong sẽ thực hiện code bên dưới
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('Lỗi!!');
    }
    // tự viết hàm fetchApi để làm cho code gọn hơn thay vì .then .catch
    // .then((res) => {
    //     setSearchResult(res.data);
    //     setLoading(false);
    // })
    // .catch(() => {
    //     setLoading(false);
    // });
};
