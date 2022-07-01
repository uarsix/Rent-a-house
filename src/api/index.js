import instance from '@/Untuls/request'
/*
* 登录
* @param { mobile, code }
* @return promise
*/
export const getLogin = ({ username, password }) => {
  return instance({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

/*
* 获取用户数据
* @param token
* @return promise
*/
export const getMyInfo = (token) => {
  return instance({
    method: 'GET',
    url: '/user',
    headers: {
      authorization: token
    }
  })
}

/*
*登出
*
*
*/
export const logOut = (token) => {
  return instance({
    method: 'POST',
    url: 'user/logout',
    headers: {
      authorization: token
    }
  })
}

/**
 * 轮播图
 *
 **/
export const getSwipeImg = () => {
  return instance({
    url: 'home/swiper'
  })
}

/**
* 租房小组
*
*
**/
export const getRentalGroup = () => {
  return instance({
    url: 'home/groups',
    params: {
      area: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}
